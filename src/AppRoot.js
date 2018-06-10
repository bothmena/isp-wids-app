import React from 'react';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import {connect} from 'react-redux';
import { userUpdated } from './redux/actions';
import Router from './Router'

class AppRoot extends React.Component {

    componentDidMount() {

        setTimeout( () => {
            firebase.auth().onAuthStateChanged( user => {
                if (user) {

                    this.loadUserFromDB(user.uid);
                    Actions.main();
                } else {

                    Actions.auth();
                }
            });
        }, 50);
    }

    loadUserFromDB(userId) {

        firebase.database().ref('/users/' + userId).once('value')
            .then(snapshot => {
                this.props.userUpdated(snapshot.val());
            })
            .catch(err => {
                console.log(err);
                this.props.userUpdated(null);
            });
    }

    render() {

        return <Router />;
    }
}

// This function provides a means of sending actions so that data in the Redux store
// can be modified. In this example, calling this.props.addToCounter() will now dispatch
// (send) an action so that the reducer can update the Redux state.
function mapDispatchToProps(dispatch) {
    return {
        userUpdated: (user) => dispatch(userUpdated(user))
    }
}

// This function provides access to data in the Redux state in the React component
// In this example, the value of this.props.count will now always have the same value
// As the count value in the Redux state
/*function mapStateToProps(state) {

    return {
        user: state.user
    }
}*/

export default connect(/*mapStateToProps*/ null, mapDispatchToProps)(AppRoot);
