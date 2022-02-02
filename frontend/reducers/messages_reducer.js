import {
    RECEIVE_ALL_MESSAGES,
    RECEIVE_MESSAGE,
    REMOVE_MESSAGE
} from '../actions/message_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { 
    RECEIVE_ALL_CONVERSATIONS, 
    RECEIVE_CONVERSATION 
} from '../actions/conversation_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_MESSAGES: 
            return action.messages;
        case RECEIVE_CHANNEL:
            if (action.channel.messages) return action.channel.messages;
            else return {};
        case RECEIVE_MESSAGE:
            nextState[action.message.id] = action.message;
            return nextState;
        case REMOVE_MESSAGE:
            delete nextState[action.messageId];
            return nextState;
        case RECEIVE_CONVERSATION:
            return {};
        case RECEIVE_ALL_CONVERSATIONS:
            return {};
        default:
            return state;
    };
};

export default messagesReducer;