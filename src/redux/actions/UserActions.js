import {USER_UPDATED} from '../types';

export const userUpdated = (user) => {

    return {
        type: USER_UPDATED,
        payload: user
    };
};
