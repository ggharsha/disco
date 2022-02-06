import React from "react";
import ConvoListItem from "./dm_list_item";
import { Link } from "react-router-dom";

export default class DmList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUserId)
        .then(() => this.props.fetchAllConversations());
    }

    handleChange(e, conversationId) {
        this.props.fetchConversation(conversationId);
        let conversations = document.getElementsByClassName('link-to-conversation');
        conversations = Array.prototype.slice.call(conversations);
        conversations.map(conversation => {
            if (conversation.classList.contains('selected-conversation')) {
                conversation.classList.remove('selected-conversation');
            }
        });
        e.currentTarget.classList.add('selected-conversation');
    }

    render() {
        if (!this.props.conversations) return null;
        return (
            <div className="convo-list-container">
                <ul className="convo-list">
                    <li className="direct-message-header">
                        <span>DIRECT MESSAGES</span>
                        <span className="add-conversation">+</span>
                    </li>
                    {this.props.conversations.map(convo => (
                        <Link
                            key={convo.id} 
                            id={convo.id}
                            to={`/channels/@me/${convo.id}`}
                            className="link-to-conversation"
                            onClick={e => this.handleChange(e, convo.id)}
                        >
                            <ConvoListItem 
                                key={convo.id} 
                                conversation={convo} 
                                currentUser={this.props.currentUser}
                            />
                        </Link>
                    ))}
                </ul>
            </div>
        )
    }
}