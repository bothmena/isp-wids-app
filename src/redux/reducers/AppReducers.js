import {APP_SETTINGS_UPDATED} from '../types';

const INITIAL_STATE = {};

export default appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case APP_SETTINGS_UPDATED:
            return { ...state, [action.payload.key]: action.payload.value };
        default:
            return state;
    }
};
