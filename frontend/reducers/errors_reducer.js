import { combineReducers } from "redux";
import SessionErrorsReducer from './session_errors_reducer';
import ServerErrorsReducer from "./server_errors_reducer";

const errorsReducer = combineReducers({
    sessionErrors: SessionErrorsReducer,
    serverErrors: ServerErrorsReducer
});

export default errorsReducer;
