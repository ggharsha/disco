import React from "react";
import { connect } from "react-redux";
import { fetchAllMessages, fetchMessage, createMessage, updateMessage, deleteMessage } from "../../actions/message_actions";
import Messages from "./messages";

const mSTP = (state, ownProps) => ({
    channelId: ownProps.channelId,
    message: { body: "" },
    channelMessages: state.messages
});

const mDTP = dispatch => ({
    fetchAllMessages: () => dispatch(fetchAllMessages()),
    fetchMessage: messageId => dispatch(fetchMessage(messageId)),
    createMessage: (channelId, message) => dispatch(createMessage(channelId, message)),
    updateMessage: message => dispatch(updateMessage(message)),
    deleteMessage: messageId => dispatch(deleteMessage(messageId))
});

export default connect(mSTP, mDTP)(Messages);