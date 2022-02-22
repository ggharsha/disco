import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ConvoListItem from './dm_list_item';

const DmListHooks = ({ history, conversations, openModal, currentUser, fetchConversation }) => {
    const historyConvo = history.location.pathname.split("/").length === 4 ? parseInt(history.location.pathname.split("/")[3]) : null;
    const [selectedConvo, setSelectedConvo] = useState(historyConvo);

    const handleClick = conversation => {
        setSelectedConvo(conversation.id);
        fetchConversation(conversation.id);
    }

    const conversationItem = convo => {
        return convo.id === selectedConvo ? <Link
            key={convo.id}
            to={`/channels/@me/${convo.id}`}
            className="link-to-conversation selected-conversation"
            onClick={() => handleClick(convo)}
        >
            <ConvoListItem
                key={convo.id}
                conversation={convo}
                currentUser={currentUser}
            />
        </Link> : <Link
            key={convo.id}
            to={`/channels/@me/${convo.id}`}
            className="link-to-conversation"
            onClick={() => handleClick(convo)}
        >
            <ConvoListItem
                conversation={convo}
                currentUser={currentUser}
            />
        </Link>
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
                conversationItem(convo)
            ))}
        </ul>
    )
};

export default DmListHooks;