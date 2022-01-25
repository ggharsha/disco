import usersReducer from "./users_reducer";
import serversReducer from "./servers_reducer";
import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
    users: usersReducer,
    servers: serversReducer
});

export default entitiesReducer;