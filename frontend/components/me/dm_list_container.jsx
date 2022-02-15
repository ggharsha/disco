import React from "react";
import { connect } from "react-redux";
import DmList from "./dm_list";
import { fetchCurrentUser } from "../../actions/session_actions";
import { 
    fetchAllConversations, 
    fetchConversation,
    createConversation
} from "../../actions/conversation_actions";
import { createConversationMembership } from "../../actions/conversation_membership_actions";

// selectors start
const selectConversations = state => (
    state.entities.conversations ? Object.values(state.entities.conversations) : []
);
// selectors end

const mSTP = state => ({
    conversations: selectConversations(state),
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchAllConversations: () => dispatch(fetchAllConversations()),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    fetchConversation: conversationId => dispatch(fetchConversation(conversationId)),
    createConversation: conversation => dispatch(createConversation(conversation)),
    createConversationMembership: conversationMembership => dispatch(createConversationMembership(conversationMembership))
});

export default connect(mSTP, mDTP)(DmList);