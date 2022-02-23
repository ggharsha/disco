import React from "react";
import { useState } from "react";

const UserListItem = ({ user }) => {
    const [modalStatus, setModalStatus] = useState(false);

    const handleClick = () => {
        if (modalStatus) setModalStatus(false);
        else setModalStatus(true);
    }

    const userListModal = (
        <div className="user-list-modal" onClick={e => e.stopPropagation()}>
            <div className="user-list-modal-banner"></div>
            <img className="user-list-modal-avatar" src={user.photoUrl} />
            <div className="user-list-modal-body">
                <p className="user-list-modal-username">
                    {user.username}
                    <span className="user-list-modal-tag">#{user.tag}</span>
                </p>
            </div>
            <div className="transparent-modal-background" onClick={() => handleClick()} />
        </div>
    )

    return (
        <div>
            <li className="user-list-item" onClick={() => handleClick()}>
                <img className="user-list-avatar" src={user.photoUrl} />
                <p className="user-list-name">{user.username}</p>
            </li>
            {modalStatus ? userListModal : null}
        </div>
    )
};

export default UserListItem;