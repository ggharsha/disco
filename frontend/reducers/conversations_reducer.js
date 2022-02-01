import { 
    RECEIVE_ALL_CONVERSATIONS, 
    RECEIVE_CONVERSATION, 
    REMOVE_CONVERSATION 
} from "../actions/conversation_actions";

const conversationsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_CONVERSATIONS:
            return action.conversations;
        case RECEIVE_CONVERSATION:
            nextState[action.payload.conversation.id] = action.payload.conversation;
            return nextState;
        case REMOVE_CONVERSATION:
            delete nextState[action.conversationId];
            return nextState;
        default:
            return state;
    };
};

export default conversationsReducer;