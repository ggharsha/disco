import React from "react";

const ConvoListItem = ({ conversation, currentUser }) => {
    // selectors start
    const selectConversationMembers = members => (
        members ? Object.values(members) : []
    );
    // selectors end

    let convoUsers = selectConversationMembers(conversation.users);
    convoUsers = convoUsers.map(user => user.username);
    convoUsers = convoUsers.filter(username => username !== currentUser.username)

    console.log(conversation.users)

    let conversationText;
    if (convoUsers.length <= 1) {
        conversationText = convoUsers[0]
    } else {
        conversationText = convoUsers.join(", ").slice(0, 23) + '...'
    };

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