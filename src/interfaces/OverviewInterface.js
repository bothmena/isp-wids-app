import React, {Component} from 'react';
import { View, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import {
    Body, Button, Container, Content, Header, Icon, Left, ListItem, Radio, Right, Segment, Separator, Text,
    Title, H2
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import firebase from 'firebase';
// import Modal from 'react-native-modal';


class OverviewInterface extends Component {

    componentWillMount() {

        this.setState({
            modalVisible: false,
            modalDescription: '',
            modalTitle: '',
            https: {
                secured: true,
                description: 'The encryption within HTTPS is intended to provide benefits like confidentiality, integrity and identity. Your information remains confidential from prying eyes because only your browser and the server can decrypt the traffic.'
            },
            antivirus: {
                secured: false,
                description: 'Antivirus do not solely offer protection against viruses; rather hundreds of added features have been introduced to provide your system with complete security against malwares, Trojans, adware as well as hackers, who are involved in developing and modifying all these infectious viruses and malware.'
            },
            trusted_apps: {
                secured: true,
                description: ' The "Trusted App" certificate confirms trustworthy compliance with data protection and data security guidelines. The auditing of in-house applications eliminates security concerns and risks to your IT infrastructure.'
            },
            app_updates: {
                secured: false,
                description: 'Having the latest Android apps on your smartphone is always a bonus but repeated notifications about app updates may irritate you. However, it is important to realize that installing updates can make all the difference in the performance of an app. The benefits of switching to the latest versions of Android apps is not confined to the users but these reach out to developers as well.'
            },
            vpn: {
                secured: true,
                description: 'VPNs, or Virtual Private Networks, allow users to securely access a private network and share data remotely through public networks. Much like a firewall protects your data on your computer, VPNs protect it online.'
            },
            network_reliability: {
                secured: false,
                description: 'In a recent survey, 70% of tablet owners and 53% of smartphone / mobile phone owners stated that they use public Wi-Fi hotspots. ... Furthermore, if their device or computer is not protected by an effective security and anti-malware product... the risks are even greater.'
            },
        });
    }

    getSubSegments() {

        if (this.props.user.role === 'admin') {
            return (
                <Segment>
                    <Button first onPress={() => Actions.profile()}>
                        <Text>Profile</Text>
                    </Button>
                    {/*<Button active>
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
                    <Button first onPress={() => Actions.profile()}>
                        <Text>Profile</Text>
                    </Button>
                    <Button last active>
                        <Text>Overview</Text>
                    </Button>
                </Segment>
            );
        }
    }

    getCheckIcon(secured) {

        if (secured) {
            return <Icon name='checkmark' style={{fontSize: 30, color: 'green', marginRight: 5}}/>;
        }
        return <Icon name='close' style={{fontSize: 30, color: 'red', marginRight: 10}}/>;
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
                        <Icon onPress={() => firebase.auth().signOut()} name="log-out"
                              style={{fontSize: 30, color: 'white'}}/>
                    </Right>
                </Header>
                {/*{this.getSubSegments()}*/}
                <Segment>
                    <Button first onPress={() => Actions.profile()}>
                        <Text>Profile</Text>
                    </Button>
                    <Button last active>
                        <Text>Overview</Text>
                    </Button>
                </Segment>
                <Content>
                    <Separator bordered>
                        <Text>Connectivity</Text>
                    </Separator>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>Https</Text>
                        </Body>
                        <Right>
                            {this.getCheckIcon(this.state.https.secured)}
                            <Icon name='information-circle' style={{fontSize: 30, color: 'black'}} onPress={() => {
                                this.setState({modalVisible: true, modalDescription: this.state.https.description,
                                    modalTitle: 'Always Use HTTPS.'});
                            }}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>Check for VPN</Text>
                        </Body>
                        <Right>
                            {this.getCheckIcon(this.state.vpn.secured)}
                            <Icon name='information-circle' style={{fontSize: 30, color: 'black'}} onPress={() => {
                                this.setState({modalVisible: true, modalDescription: this.state.vpn.description,
                                    modalTitle: 'Using a VPN'});
                            }}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>Check networks reliability</Text>
                        </Body>
                        <Right>
                            {this.getCheckIcon(this.state.network_reliability.secured)}
                            <Icon name='information-circle' style={{fontSize: 30, color: 'black'}} onPress={() => {
                                this.setState({modalVisible: true, modalDescription: this.state.network_reliability.description,
                                    modalTitle: 'Public Networks Threat'});
                            }}/>
                        </Right>
                    </ListItem>

                    <Separator bordered>
                        <Text>Installed Apps</Text>
                    </Separator>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>Check for antivirus</Text>
                        </Body>
                        <Right>
                            {this.getCheckIcon(this.state.antivirus.secured)}
                            <Icon name='information-circle' style={{fontSize: 30, color: 'black'}} onPress={() => {
                                this.setState({modalVisible: true, modalDescription: this.state.antivirus.description,
                                    modalTitle: 'Installing an Anti-virus'});
                            }}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>Check for untrusted Apps</Text>
                        </Body>
                        <Right>
                            {this.getCheckIcon(this.state.trusted_apps.secured)}
                            <Icon name='information-circle' style={{fontSize: 30, color: 'black'}} onPress={() => {
                                this.setState({modalVisible: true, modalDescription: this.state.trusted_apps.description,
                                    modalTitle: 'Installing Trusted Apps'});
                            }}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>Apps updates</Text>
                        </Body>
                        <Right>
                            {this.getCheckIcon(this.state.app_updates.secured)}
                            <Icon name='information-circle' style={{fontSize: 30, color: 'black'}} onPress={() => {
                                this.setState({modalVisible: true, modalDescription: this.state.app_updates.description,
                                    modalTitle: 'Applications Updates'});
                            }}/>
                        </Right>
                    </ListItem>
                    <Modal animationType = {"slide"} transparent = {false}
                           visible = {this.state.modalVisible}
                           onRequestClose = {() => { console.log("Modal has been closed.") } }>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <View style={{height: 55, padding: 15, paddingLeft: 25}} >
                                <H2>{this.state.modalTitle}</H2>
                            </View>
                            <View style={{flex:1, paddingRight: 25, paddingLeft: 25}} >
                                <Text>{this.state.modalDescription}</Text>
                            </View>
                            <View style={{height: 75, padding: 15, paddingRight: 25, paddingLeft: 25}} >
                                <TouchableHighlight>
                                    <Button block primary rounded onPress = {() => {
                                        this.setState({modalVisible: false})}}>
                                        <Text>Close Modal</Text>
                                    </Button>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(OverviewInterface);
