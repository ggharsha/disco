import React from "react";
import { connect } from "react-redux";
import { updateChannel, deleteChannel } from "../../actions/channel_actions";
import { fetchCurrentUser } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import UpdateChannel from "./update_channel";

// selectors start
const parseChannelId = url => {
    const urlArr = url.split("/");
    return parseInt(urlArr[3]);
}
// selectors end

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    currentChannel: state.entities.channels[parseChannelId(ownProps.history.location.pathname)]
});

const mDTP = dispatch => ({
    updateChannel: channel => dispatch(updateChannel(channel)),
    deleteChannel: channelId => dispatch(deleteChannel(channelId)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(UpdateChannel);