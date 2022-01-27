import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";

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
        // case RECEIVE_SERVER:
        // case REMOVE_SERVER:
        default:
            return nextState;
    };
};

export default channelsReducer;