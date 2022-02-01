import React from "react";
import { connect } from "react-redux";
import { fetchConversation } from "../../util/conversations_api_util";
import Conversation from "./conversation";

const mSTP = (state, ownProps) => ({
    selectedConversation: state.entities.conversations[ownProps.match.params.directMessageId],
    currentUser: state.entitites.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchConversation: conversationId => dispatch(fetchConversation(conversationId))
});

export default connect(mSTP, mDTP)(Conversation);