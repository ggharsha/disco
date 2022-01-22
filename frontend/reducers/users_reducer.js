import { RECEIVE_ALL_USERS, RECEIVE_USER, REMOVE_USER } from "../actions/users_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        case REMOVE_USER:
            delete nextState[action.userId];
            return nextState;
        default:
            return state;
    };
};

export default usersReducer;