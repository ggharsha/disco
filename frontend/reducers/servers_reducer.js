import { RECEIVE_ALL_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_SERVERS:
            return action.servers;
        case RECEIVE_SERVER:
            nextState[action.server.server.id] = action.server.server;
            return nextState;
        case REMOVE_SERVER:
            delete nextState[action.serverId];
            return nextState;
        case RECEIVE_CURRENT_USER:
            Object.assign(nextState, action.currentUser.servers);
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    };
};

export default serversReducer;