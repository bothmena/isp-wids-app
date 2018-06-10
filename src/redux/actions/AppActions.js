import {APP_SETTINGS_UPDATED} from '../types';

export const settingsUpdated = (key, value) => {

    return {
        type: APP_SETTINGS_UPDATED,
        payload: {key, value}
    };
};
