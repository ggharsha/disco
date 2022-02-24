import React from "react";
import { useState, useEffect, useRef } from "react";

const UserListItem = ({ user }) => {
    const [modalStatus, setModalStatus] = useState(false);
    
    const handleClick = () => {
        if (modalStatus) setModalStatus(false);
        else setModalStatus(true);
    }

    const modalRef = useRef();

    useEffect(() => {
        const handler = event => {
            if (!modalRef.current.contains(event.target)) {
                setModalStatus(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => document.removeEventListener("mousedown", handler);
    })

    const userListModal = (
        <div className="user-list-modal" ref={modalRef} onClick={e => e.stopPropagation()}>
                <div className="user-list-modal-banner"></div>
                <img className="user-list-modal-avatar" src={user.photoUrl} />
                <div className="user-list-modal-body">
                    <p className="user-list-modal-username">
                        {user.username}
                        <span className="user-list-modal-tag">#{user.tag}</span>
                    </p>
                </div>
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