export const fetchUsers = () => {
    return $.ajax({
        url: `api/users`
    });
};

export const fetchUser = userId => {
    return $.ajax({
        url: `api/users/${userId}`
    });
};

export const createUser = user => {
    return $.ajax({
        url: `api/users`,
        method: `POST`,
        data: { user }
    });
};

export const updateUser = user => {
    return $.ajax({
        url: `api/users/${user.id}`,
        method: `PATCH`,
        data: { user }
    });
};

export const deleteUser = userId => {
    return $.ajax({
        url: `api/users/${userId}`,
        method: `DELETE`
    });
};
