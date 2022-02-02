import { 
    RECEIVE_CHANNEL, 
    REMOVE_CHANNEL 
} from "../actions/channel_actions";
import { 
    RECEIVE_SERVER, 
    REMOVE_SERVER 
} from "../actions/server_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { 
    RECEIVE_ALL_CONVERSATIONS, 
    RECEIVE_CONVERSATION 
} from "../actions/conversation_actions";

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CHANNEL:
            nextState[action.channel.id] = action.channel;
            return nextState;
        case REMOVE_CHANNEL:
            delete nextState[action.channel.id];
            return nextState;
        case RECEIVE_SERVER:
            return action.server.channels;
        case REMOVE_SERVER:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_CONVERSATION:
            return {};
        case RECEIVE_ALL_CONVERSATIONS:
            return {};
        default:
            return nextState;
    };
};

export default channelsReducer;