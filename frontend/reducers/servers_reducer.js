import { RECEIVE_ALL_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_SERVERS:
            return action.servers;
        case RECEIVE_SERVER:
            nextState[action.server.id] = action.server;
            return nextState;
        case REMOVE_SERVER:
            delete nextState[action.serverId];
            return nextState;
        default:
            return state;
    };
};

export default serversReducer;