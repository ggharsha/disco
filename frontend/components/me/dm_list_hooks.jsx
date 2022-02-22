import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ConvoListItem from './dm_list_item';

const DmListHooks = ({ history, conversations, openModal, currentUser }) => {
    const historyConvo = history.location.pathname === "/channels/@me/" ? parseInt(history.location.pathname.split("/")[3]) : null;
    const [selectedConvo, setSelectedConvo] = useState(null);

    const handleClick = conversation => {
        setSelectedConvo(conversation.id);
        fetchConversation(conversation.id);
    }

    return (
        <ul className="convo-list">
            <li className="direct-message-header">
                <span>DIRECT MESSAGES</span>
                <span
                    className="add-conversation"
                    onClick={() => openModal('createConversation')}
                >
                    +
                </span>
            </li>
            {conversations.map(convo => (
                <Link
                    key={convo.id}
                    id={convo.id}
                    to={`/channels/@me/${convo.id}`}
                    className="link-to-conversation"
                    onClick={() => handleClick(convo)}
                >
                    <ConvoListItem
                        key={convo.id}
                        conversation={convo}
                        currentUser={currentUser}
                    />
                </Link>
            ))}
        </ul>
    )
};

export default DmListHooks;