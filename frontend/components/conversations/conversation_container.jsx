import React from "react";
import { connect } from "react-redux";
import { 
    fetchConversation,
    fetchAllConversations 
} from "../../actions/conversation_actions";
import { fetchUser } from "../../actions/users_actions";
import Conversation from "./conversation";

const mSTP = (state, ownProps) => ({
    selectedConversation: state.entities.conversations[ownProps.match.params.directMessageId],
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchAllConversations: () => dispatch(fetchAllConversations()),
    fetchConversation: conversationId => dispatch(fetchConversation(conversationId)),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(Conversation);