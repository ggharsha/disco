import { combineReducers } from "redux";
import SessionErrorsReducer from './session_errors_reducer';
import ServerErrorsReducer from "./server_errors_reducer";
import ChannelErrorsReducer from "./channel_errors_reducer";
import ConversationErrorsReducer from "./conversation_errors_reducer";
import UserErrorsReducer from "./user_errors_reducer";

const errorsReducer = combineReducers({
    sessionErrors: SessionErrorsReducer,
    serverErrors: ServerErrorsReducer,
    channelErrors: ChannelErrorsReducer,
    conversationErrors: ConversationErrorsReducer,
    userErrors: UserErrorsReducer
});

export default errorsReducer;
