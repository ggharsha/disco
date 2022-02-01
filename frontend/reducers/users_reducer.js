import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { 
    RECEIVE_ALL_USERS, 
    RECEIVE_USER, 
    REMOVE_USER 
} from "../actions/users_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CONVERSATION } from "../actions/conversation_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            nextState[action.user.user.id] = action.user.user;
            return nextState;
        case REMOVE_USER:
            delete nextState[action.userId];
            return nextState;
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.user.id] = action.currentUser.user;
            return nextState;
        case RECEIVE_SERVER:
            return action.server.users;
        case RECEIVE_CONVERSATION:
            return action.payload.users;
        default:
            return state;
    };
};

export default usersReducer;