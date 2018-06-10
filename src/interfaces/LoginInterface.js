import React from 'react';
import firebase from 'firebase';
import {Image} from 'react-native';
import {
    Body, Button, Container, Content, Footer, FooterTab, Form, H1, Header, Icon, Input, Item, Label, Left, Right,
    Text, Title
} from 'native-base';
import {connect} from 'react-redux';
import {userUpdated} from '../redux/actions';


class LoginInterface extends React.Component {

    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

    loginUser() {

        console.log('loginUser is called !');
        if (this.state.email !== '' && this.state.password !== '') {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .catch((err) => {
                    console.log(err);
                    this.props.userUpdated(null);
                });
        }
    };

    render() {

        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name='log-in' style={{fontSize: 30, color: 'white'}}/>
                    </Left>
                    <Body>
                    <Title>Login</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content style={{padding: 25}}>
                    <Image style={{marginTop: 20, marginLeft: 77, width: 162, height: 60}}
                           source={require('../assets/images/logo.jpg')}
                    />
                    <H1 style={{color: 'blue', marginTop: 10, marginLeft: 75}}>ISP-WIDS App</H1>
                    <Form style={{marginTop: 20}}>
                        <Item rounded style={{marginBottom: 10}}>
                            <Label style={{paddingLeft: 15}}>
                                <Icon name='mail' style={{fontSize: 35}}/>
                            </Label>
                            <Input placeholder='Email address'
                                   onChangeText={(email) => this.setState({email})}/>
                        </Item>
                        <Item rounded style={{marginBottom: 10}}>
                            <Label style={{paddingLeft: 15}}>
                                <Icon name='unlock' style={{fontSize: 35}}/>
                            </Label>
                            <Input secureTextEntry={true} placeholder='Password'
                                   onChangeText={(password) => this.setState({password})}/>
                        </Item>
                    </Form>

                    <Button iconLeft rounded block bordered success style={{marginTop: 150}}
                            onPress={() => this.loginUser()}>
                        <Text>Log In</Text>
                        <Icon name='send'/>
                    </Button>
                </Content>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {

    return {
        userUpdated: (user) => dispatch(userUpdated(user))
    }
}

function mapStateToProps(state) {

    const {user} = state;
    return user;
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginInterface);
