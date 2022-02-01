import React from "react";
import DirectMessageContainer from './direct_message_container';
import UserListItem from "../me/user_list_item";

export default class Conversation extends React.Component {
    constructor(props) {
        super(props);

        this.handleConversationNav = this.handleConversationNav.bind(this);
        this.convertUsersIntoArray = this.convertUsersIntoArray.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllConversations()
        .then(() => this.props.fetchConversation(this.props.match.params.directMessageId))
        .then(() => this.props.handleConversationNav);
    }

    componentDidUpdate() {
        this.handleConversationNav();
    }

    handleConversationNav() {
        let convos = document.getElementsByClassName('conversation-list-item');
        convos = Array.prototype.slice.call(convos);

        let preselected = document.getElementsByClassName('selected-conversation');
        preselected = Array.prototype.slice.call(preselected);

        if (preselected.length === 0) {
            convos.forEach(convo => {
                if (convo.id === this.props.match.params.directMessageId) convo.classList.add('selected-conversation');
        })};
    }

    convertUsersIntoArray() {
        return Object.values(this.props.selectedConversation.users)
    }

    render() {
        if (!this.props.selectedConversation) return null;
        return (
            <div className="conversation-div">
                <div className="search-bar-header">

                </div>
                <div className="conversation-members-header">
                    <p className="conversation-members-text">
                        {this.convertUsersIntoArray().map(user => user.username).join(", ")}
                    </p>
                </div>
                <div className="conversation-container">
                    <DirectMessageContainer 
                        cableApp={this.props.cableApp} 
                        conversation={this.props.selectedConversation}
                        conversationId={this.props.selectedConversation.id}
                    />
                </div>
                <div className="user-list">
                    <ul className="users">
                        <li className="member-count">
                            MEMBERS - {this.convertUsersIntoArray().length}
                        </li>
                        {this.convertUsersIntoArray().map(user => (
                            <UserListItem
                                key={user.id}
                                user={user}
                                fetchUser={this.props.fetchUser}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}