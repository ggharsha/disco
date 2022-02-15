import React from "react";
import { connect } from "react-redux";
import DmList from "./dm_list";
import { fetchCurrentUser } from "../../actions/session_actions";
import { 
    fetchAllConversations, 
    fetchConversation,
} from "../../actions/conversation_actions";

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
    fetchConversation: conversationId => dispatch(fetchConversation(conversationId))
});

export default connect(mSTP, mDTP)(DmList);