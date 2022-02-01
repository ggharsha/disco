import {
    RECEIVE_ALL_DMS,
    RECEIVE_DM,
    REMOVE_DM
} from '../actions/direct_message_actions';
import { RECEIVE_CONVERSATION } from '../actions/conversation_actions';

const directMessagesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_DMS:
            return action.directMessages;
        case RECEIVE_DM: 
            nextState[action.directMessage.id] = action.directMessage;
            return nextState;
        case REMOVE_DM:
            delete nextState[action.directMessageId];
            return nextState;
        case RECEIVE_CONVERSATION:
            if (action.payload.directMessages) return action.payload.directMessages;
            else return {};
        default:
            return state;
    };
};

export default directMessagesReducer;