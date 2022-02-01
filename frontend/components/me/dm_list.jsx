import React from "react";
import ConvoListItem from "./dm_list_item";
import { Link } from "react-router-dom";

export default class DmList extends React.Component {
    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUserId)
            .then(() => this.props.fetchAllConversations());
    }

    render() {
        if (!this.props.conversations) return null;
        return (
            <div className="convo-list-container">
                <ul className="convo-list">
                    {this.props.conversations.map(convo => (
                        <Link
                            key={convo.id} 
                            to={`/channels/@me/${convo.id}`}
                            className="link-to-conversation"
                            onClick={() => this.props.fetchConversation(convo.id)}
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