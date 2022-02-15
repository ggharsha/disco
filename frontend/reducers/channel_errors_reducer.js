import {
    RECEIVE_CHANNEL,
    RECEIVE_CHANNEL_ERRORS,
    REMOVE_CHANNEL
} from '../actions/channel_actions';
import { RECEIVE_SERVER } from '../actions/server_actions';

const channelErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CHANNEL_ERRORS:
            return action.errors;
        case RECEIVE_CHANNEL:
            return [];
        case REMOVE_CHANNEL:
            return [];
        case RECEIVE_SERVER:
            return [];
        default:
            return state;
    };
};

export default channelErrorsReducer;