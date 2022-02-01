import usersReducer from "./users_reducer";
import serversReducer from "./servers_reducer";
import channelsReducer from "./channels_reducer";
import messagesReducer from "./messages_reducer";
import conversationsReducer from "./conversations_reducer";
import directMessagesReducer from "./direct_messages_reducer";
import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
    users: usersReducer,
    servers: serversReducer,
    channels: channelsReducer,
    messages: messagesReducer,
    conversations: conversationsReducer,
    directMessages: directMessagesReducer
});

export default entitiesReducer;