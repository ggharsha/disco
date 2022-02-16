import {
    RECEIVE_CONVERSATION_ERRORS,
    RECEIVE_CONVERSATION,
    REMOVE_CONVERSATION
} from '../actions/conversation_actions';

const conversationErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CONVERSATION_ERRORS:
            return action.errors;
        case RECEIVE_CONVERSATION:
            return [];
        case REMOVE_CONVERSATION:
            return [];
        default:
            return state;
    };
};

export default conversationErrorsReducer;