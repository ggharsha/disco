import React from "react";

export default class DmList extends React.Component {
    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUserId)
            .then(() => this.props.fetchAllConversations());
    }

    render() {
        if (!this.props.conversations) return null;
        return (
            <div className="convo-list-container">
                <ul>
                </ul>
            </div>
        )
    }
}