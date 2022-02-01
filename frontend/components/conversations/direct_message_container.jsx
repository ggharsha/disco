import React from "react";
import { connect } from "react-redux";
import {
    fetchAllDms,
    fetchDm,
    createDm,
    updateDm,
    deleteDm,
    receiveDirectMessage
} from '../../actions/direct_message_actions';
import { fetchCurrentUser } from "../../actions/session_actions";
import { fetchConversation } from "../../actions/conversation_actions";
import DirectMessages from "./direct_messages";

const mSTP = state => ({
    directMessages: Object.values(state.entities.directMessages),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchAllDms: () => dispatch(fetchAllDms()),
    fetchDm: dmId => dispatch(fetchDm(dmId)),
    createDm: (conversationId, dm) => dispatch(createDm(conversationId, dm)),
    updateDm: dm => dispatch(updateDm(dm)),
    deleteDm: dmId => dispatch(deleteDm(dmId)),
    receiveDirectMessage: directMessage => dispatch(receiveDirectMessage(directMessage)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    fetchConversation: conversationId => dispatch(fetchConversation(conversationId))
});

export default connect(mSTP, mDTP)(DirectMessages);