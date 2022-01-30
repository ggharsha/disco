import React from "react";
import { connect } from "react-redux";
import { fetchAllMessages, fetchMessage, createMessage, updateMessage, deleteMessage } from "../../actions/message_actions";
import { fetchChannel } from "../../actions/channel_actions";
import Messages from "./messages";

const mSTP = (state, ownProps) => ({
    channelId: ownProps.channelId,
    channelMessages: Object.values(state.entities.messages)
});

const mDTP = dispatch => ({
    fetchAllMessages: () => dispatch(fetchAllMessages()),
    fetchMessage: messageId => dispatch(fetchMessage(messageId)),
    createMessage: (channelId, message) => dispatch(createMessage(channelId, message)),
    updateMessage: message => dispatch(updateMessage(message)),
    deleteMessage: messageId => dispatch(deleteMessage(messageId)),
    fetchChannel: channelId => dispatch(fetchChannel(channelId))
});

export default connect(mSTP, mDTP)(Messages);