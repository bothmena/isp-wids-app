console.ignoredYellowBox = [
    'Setting a timer'
];

import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import AppRoot from './src/AppRoot';
import reducers from './src/redux/reducers';

export default class App extends Component {

    async componentWillMount() {

        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ fontLoaded: true });

        const config = {
            apiKey: "AIzaSyB_v_nokQGlgak-zFeE3swun1rupVpUDmc",
            authDomain: "ispwidsapp.firebaseapp.com",
            databaseURL: "https://ispwidsapp.firebaseio.com",
            projectId: "ispwidsapp",
            storageBucket: "ispwidsapp.appspot.com",
            messagingSenderId: "290635084829"
        };
        firebase.initializeApp(config);
    }

    render() {

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        if ( this.state && this.state.fontLoaded ) {

            return (
                <Provider store={store}>
                    <AppRoot/>
                </Provider>
            );
        }
        return null;
    }
}
