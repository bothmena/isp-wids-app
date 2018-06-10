import {USER_UPDATED} from '../types';

const INITIAL_STATE = {
    email: "",
    first_name: "",
    last_name: "",
    role: "",
    phone: "",
    position: "",
    join_date: "",
};

export default userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_UPDATED:
            if ( action.payload )
                return action.payload;
            return INITIAL_STATE;
        default:
            return state;
    }
};
