import {combineReducers} from 'redux';
import userReducer from './UserReducers';
import appReducer from './AppReducers';

export default combineReducers({
    user: userReducer,
    app: appReducer,
});
