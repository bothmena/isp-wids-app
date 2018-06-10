import React from 'react';
import {Image} from 'react-native';
import {
    Body, Button, Container, Content, Header, Icon, Separator,
    Left, Right, Segment, Text, Title, ListItem, H2
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import firebase from 'firebase';

class ProfileInterface extends React.Component {

    getSubSegments() {

        if (this.props.user.role === 'admin') {
            return (
                <Segment>
                    <Button first active>
                        <Text>Profile</Text>
                    </Button>
                    {/*<Button onPress={() => Actions.overview()}>
                        <Text>Overview</Text>
                    </Button>*/}
                    <Button last onPress={() => Actions.settings()}>
                        <Text>Settings</Text>
                    </Button>
                </Segment>
            );
        } else {
            return (
                <Segment>
                    <Button first active>
                        <Text>Profile</Text>
                    </Button>
                    <Button last onPress={() => Actions.overview()}>
                        <Text>Overview</Text>
                    </Button>
                </Segment>
            );
        }
    }

    getUserImage() {

        const style = {marginTop: 10, marginLeft: 120, width: 120, height: 120};
        if ( this.props.user.role === 'admin' ) {
            return (
                <Image style={style} source={require('../assets/images/admin.png')} />
            );
        } else {
            return (
                <Image style={style} source={require('../assets/images/user.png')}/>
            );
        }
    }

    render() {

        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button transparent>
                            <Icon name="contact" style={{fontSize: 30, color: 'white'}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>{this.props.user.first_name + ' ' + this.props.user.last_name}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={()=>firebase.auth().signOut()}>
                            <Icon name="log-out" style={{fontSize: 30, color: 'white'}}/>
                        </Button>
                    </Right>
                </Header>
                {this.getSubSegments()}
                <Content>
                    {this.getUserImage()}
                    <H2 style={{color: 'blue', marginTop: 0, marginLeft: 90}}>Profile Summary</H2>
                    <Separator bordered>
                        <Text>Personal Details</Text>
                    </Separator>
                    <ListItem last>
                        <Left>
                            <Text>Name: </Text>
                        </Left>
                        <Body>
                        <Text>{ this.props.user.first_name + ' ' + this.props.user.last_name }</Text>
                        </Body>
                    </ListItem>
                    <ListItem last>
                        <Left>
                            <Text>Email: </Text>
                        </Left>
                        <Body>
                        <Text>{ this.props.user.email }</Text>
                        </Body>
                    </ListItem>
                    <ListItem last>
                        <Left>
                            <Text>Phone: </Text>
                        </Left>
                        <Body>
                        <Text>{ this.props.user.phone }</Text>
                        </Body>
                    </ListItem>
                    <Separator bordered>
                        <Text>Professional Details</Text>
                    </Separator>
                    <ListItem last>
                        <Left>
                            <Text>Position: </Text>
                        </Left>
                        <Body>
                        <Text>{ this.props.user.position }</Text>
                        </Body>
                    </ListItem>
                    <ListItem last>
                        <Left>
                            <Text>Join Date: </Text>
                        </Left>
                        <Body>
                        <Text>{ this.props.user.join_date }</Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {

    return {
        // addToCounter: () => dispatch(addToCounter())
    }
}

function mapStateToProps(state) {

    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInterface);
