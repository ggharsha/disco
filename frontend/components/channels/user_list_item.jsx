import React from "react";

const UserListItem = ({ user }) => (
    <div className="tooltip">
        <li className="user-list-item">
            <img className="user-list-avatar" src={user.photoUrl} />
            <p className="user-list-name">{user.username}</p>
        </li>
        <span className="tooltiptext">{user.username}#{user.tag}</span>
    </div>
);

export default UserListItem;