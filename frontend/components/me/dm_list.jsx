import React from "react";
import ConvoListItem from "./dm_list_item";
import { Link } from "react-router-dom";
import DmListHooks from "./dm_list_hooks";

export default class DmList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUserId)
        .then(() => this.props.fetchAllConversations());
    }

    render() {
        if (!this.props.conversations) return null;
        return (
            <div className="convo-list-container">
                <DmListHooks 
                    history={this.props.history}
                    conversations={this.props.conversations}
                    openModal={this.props.openModal}
                    currentUser={this.props.currentUser}
                    fetchConversation={this.props.fetchConversation}
                />
            </div>
        )
    }
}