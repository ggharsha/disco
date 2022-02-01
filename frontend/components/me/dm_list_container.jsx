import React from "react";
import { connect } from "react-redux";
import DmList from "./dm_list";
import { fetchCurrentUser } from "../../actions/session_actions";
import { fetchAllConversations } from "../../actions/conversation_actions";

const mSTP = state => ({
    conversations: state.entities.conversations,
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
    fetchAllConversations: () => dispatch(fetchAllConversations()),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId))
});

export default connect(mSTP, mDTP)();