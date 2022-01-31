import React from "react";
import { connect } from "react-redux";
import { fetchAllMessages, fetchMessage, createMessage, updateMessage, deleteMessage } from "../../actions/message_actions";
import { fetchChannel } from "../../actions/channel_actions";
import { fetchCurrentUser } from "../../actions/session_actions";
import Messages from "./messages";

const mSTP = (state, ownProps) => ({
    channelId: ownProps.channelId,
    channel: ownProps.channel,
    channelMessages: Object.values(state.entities.messages),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchAllMessages: () => dispatch(fetchAllMessages()),
    fetchMessage: messageId => dispatch(fetchMessage(messageId)),
    createMessage: (channelId, message) => dispatch(createMessage(channelId, message)),
    updateMessage: message => dispatch(updateMessage(message)),
    deleteMessage: messageId => dispatch(deleteMessage(messageId)),
    fetchChannel: channelId => dispatch(fetchChannel(channelId)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId))
});

export default connect(mSTP, mDTP)(Messages);