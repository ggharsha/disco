import {
    RECEIVE_ALL_MESSAGES,
    RECEIVE_MESSAGE,
    REMOVE_MESSAGE
} from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_MESSAGES: 
            return action.messages;
        case RECEIVE_MESSAGE:
            nextState[action.message.id] = action.message;
            return nextState;
        case REMOVE_MESSAGE:
            delete nextState[action.messageId];
            return nextState;
        default:
            return state;
    };
};

export default messagesReducer;