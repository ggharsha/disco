import {
    RECEIVE_USER,
    RECEIVE_USER_ERRORS,
    REMOVE_USER
} from "../actions/users_actions";
import { CLOSE_MODAL } from "../actions/modal_actions";

const userErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case RECEIVE_USER:
            return [];
        case REMOVE_USER:
            return [];
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    };
};

export default userErrorsReducer;