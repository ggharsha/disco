import React from "react";
import { useState, useEffect, useRef } from "react";

const ConversationMessageItem = ({ message }) => {
    const [modalStatus, setModalStatus] = useState(false);
    const modalRef = useRef()

    const handleClick = () => {
        setModalStatus(!modalStatus);
    }

    useEffect(() => {
        const handler = event => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalStatus(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => document.removeEventListener("mousedown", handler);
    })

    const modal = (user, message) => (
        <div className="user-list-modal-message" ref={modalRef} onClick={e => e.stopPropagation()}>
            <div className="user-list-modal-banner"></div>
            <img className="user-list-modal-avatar" src={message.photoUrl} />
            <div className="user-list-modal-body">
                <p className="user-list-modal-username">
                    {user.username}
                    <span className="user-list-modal-tag">#{user.tag}</span>
                </p>
            </div>
        </div>
    )

    return (
        <li
            key={message.id}
            className="conversation-message"
        >
            <span className="message-timestamp">
                {message.createdAt.slice(11, 16)}&nbsp;&nbsp;
            </span>
            <span className="message-username" onClick={() => handleClick()}>
                {message.user.username}
            </span>
            {modalStatus ? modal(message.user, message) : null}
            <span className="message-body">
                {message.body}
            </span>
        </li>
    )
}

export default ConversationMessageItem;