import * as UserApiUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const removeUser = userId => ({
    type: REMOVE_USER,
    userId
});

export const fetchUsers = () => dispatch => {
    return UserApiUtil.fetchUsers()
    .then(users => dispatch(receiveAllUsers(users)))
};

export const fetchUser = userId => dispatch => {
    return UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
};

export const createUser = user => dispatch => {
    return UserApiUtil.createUser(user)
    .then(user => dispatch(receiveUser(user)))
}

export const updateUser = user => dispatch => {
    return UserApiUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)))
}

export const deleteUser = userId => dispatch => {
    return UserApiUtil.deleteUser(userId)
    .then(() => dispatch(removeUser(userId)))
};
