import React from 'react';
import {
    Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Segment, Separator, Switch, Text,
    Title
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {settingsUpdated} from '../redux/actions';
import firebase from 'firebase';

class SettingsInterface extends React.Component {

    componentWillMount() {

        this.setState({
            tcp: true,
            udp: false,
            udp_lite: true,
            dns: true,
            ftp: true,
            http: true,
            irc: true,
            pop_smtp: true,
            ssh: true,
            antivirus: true,
            trusted_apps: true,
            app_updates: false,
            vpn: true,
            network_reliability: true,
        });
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
                <Segment>
                    <Button first onPress={() => Actions.profile()}>
                        <Text>Profile</Text>
                    </Button>
                    {/*<Button onPress={() => Actions.overview()}>
                        <Text>Overview</Text>
                    </Button>*/}
                    <Button last active>
                        <Text>Settings</Text>
                    </Button>
                </Segment>
                <Content style={{paddingLeft: -10}}>

                    <Separator bordered>
                        <Text>Transport Protocols</Text>
                    </Separator>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>TCP</Text>
                        </Body>
                        <Right>
                            <Switch
                                onValueChange={(tcp) => this.setState({tcp})}
                                value={this.state.tcp}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>UDP</Text>
                        </Body>
                        <Right>
                            <Switch
                                onValueChange={(udp) => this.setState({udp})}
                                value={this.state.udp}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>UDP Lite</Text>
                        </Body>
                        <Right>
                            <Switch
                                onValueChange={(udp_lite) => this.setState({udp_lite})}
                                value={this.state.udp_lite}/>
                        </Right>
                    </ListItem>

                    <Separator bordered>
                        <Text>Application Protocols</Text>
                    </Separator>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>DNS</Text>
                        </Body>
                        <Right>
                            <Switch
                                onValueChange={(dns) => this.setState({dns})}
                                value={this.state.dns}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>FTP</Text>
                        </Body>
                        <Right>
                            <Switch
                                onValueChange={(ftp) => this.setState({ftp})}
                                value={this.state.ftp}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>HTTP(S)</Text>
                        </Body>
                        <Right>
                            <Switch
                                onValueChange={(http) => this.setState({http})}
                                value={this.state.http}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>IRC</Text>
                        </Body>
                        <Right>
                            <Switch
                                onValueChange={(irc) => this.setState({irc})}
                                value={this.state.irc}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>POP3/SMTP</Text>
                        </Body>
                        <Right>
                            <Switch
                                onValueChange={(pop_smtp) => this.setState({pop_smtp})}
                                value={this.state.pop_smtp}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>SSH</Text>
                        </Body>
                        <Right>
                            <Switch
                                onValueChange={(ssh) => this.setState({ssh})}
                                value={this.state.ssh}/>
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
                            <Switch
                                onValueChange={(antivirus) => this.setState({antivirus})}
                                value={this.state.antivirus}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>Check for untrusted Apps</Text>
                        </Body>
                        <Right>
                            <Switch
                                onValueChange={(trusted_apps) => this.setState({trusted_apps})}
                                value={this.state.trusted_apps}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>Apps updates</Text>
                        </Body>
                        <Right>
                            <Switch
                                onValueChange={(app_updates) => this.setState({app_updates})}
                                value={this.state.app_updates}/>
                        </Right>
                    </ListItem>

                    <Separator bordered>
                        <Text>Connectivity</Text>
                    </Separator>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>Check for VPN</Text>
                        </Body>
                        <Right>
                            <Switch
                                onValueChange={(vpn) => this.setState({vpn})}
                                value={this.state.vpn}/>
                        </Right>
                    </ListItem>
                    <ListItem icon last>
                        <Left/>
                        <Body>
                        <Text>Check networks reliability</Text>
                        </Body>
                        <Right>
                            <Switch
                                onValueChange={(network_reliability) => this.setState({network_reliability})}
                                value={this.state.network_reliability}/>
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {

    return {
        settingsUpdated: () => dispatch(settingsUpdated())
    }
}

function mapStateToProps(state) {

    return {
        app: state.app,
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsInterface);
