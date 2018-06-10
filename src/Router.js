import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoginInterface from './interfaces/LoginInterface';
import ProfileInterface from './interfaces/ProfileInterface';
import SettingsInterface from './interfaces/SettingsInterface';
import OverviewInterface from './interfaces/OverviewInterface';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop: 12}}>
            <Scene key="root" hideNavBar>
                <Scene key="auth" hideNavBar>
                    <Scene key="login" component={LoginInterface} title="Login"/>
                </Scene>

                <Scene key="main" hideNavBar>
                    <Scene key="profile" initial component={ProfileInterface} title="Create Employee"/>
                    <Scene key="overview" component={OverviewInterface} title="App Overview"/>
                    <Scene key="settings" component={SettingsInterface} title="App Settings"/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
