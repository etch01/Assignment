//Types to trigger reducer cases
import {UPDATE_CONNECTION_STATUS} from '../Types';

//Actions for types
export function updateConnectionStatus(payload) {
    return {type: UPDATE_CONNECTION_STATUS,payload}
};
