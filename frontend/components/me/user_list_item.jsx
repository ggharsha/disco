import React from "react";

const UserListItem = ({ user }) => (
    <li className="user-list-item">
        <img className="user-list-avatar" src={user.photoUrl} />
        <p className="user-list-name">{user.username}</p>
    </li>
);

export default UserListItem;