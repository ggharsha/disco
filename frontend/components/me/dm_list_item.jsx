import React from "react";

const ConvoListItem = ({ conversation, currentUser }) => {
    // selectors start
    const selectConversationMembers = members => (
        members ? Object.values(members) : []
    );
    // selectors end

    let convoUsers = selectConversationMembers(conversation.users);
    convoUsers = convoUsers.map(user => user.username);

    let conversationText;
    if (convoUsers.length <= 2) {
        conversationText = convoUsers.filter(user => user !== currentUser)[0]
    } else conversationText = convoUsers.join(", ").slice(0, 14) + '...';

    return (
        <li className="conversation-list-item">
            <img 
                src={window.groupDm} 
                className="conversation-list-icon"
            />
            <p className="conversation-list-text">
                {conversationText}
            </p>
        </li>
    )
};

export default ConvoListItem;