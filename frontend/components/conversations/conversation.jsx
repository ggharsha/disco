import React from "react";
import DirectMessageContainer from './direct_message_container';
import UserListItem from "../me/user_list_item";

export default class Conversation extends React.Component {
    constructor(props) {
        super(props);

        this.convertUsersIntoArray = this.convertUsersIntoArray.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllConversations()
        .then(() => this.props.fetchConversation(this.props.match.params.directMessageId));
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