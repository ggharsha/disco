import React from "react";
import { connect } from "react-redux";
import { updateChannel, deleteChannel } from "../../actions/channel_actions";
import { fetchCurrentUser } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import { fetchServer } from "../../actions/server_actions";
import UpdateChannel from "./update_channel";

// selectors start
const parseServerId = url => {
    const urlArr = url.split("/");
    return parseInt(urlArr[2]);
};

const parseChannelId = url => {
    const urlArr = url.split("/");
    return parseInt(urlArr[3]);
}
// selectors end

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    currentChannel: state.entities.channels[parseChannelId(ownProps.history.location.pathname)],
    currentServer: state.entities.servers[parseServerId(ownProps.history.location.pathname)],
    errors: state.errors.channelErrors
});

const mDTP = dispatch => ({
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    updateChannel: channel => dispatch(updateChannel(channel)),
    deleteChannel: channelId => dispatch(deleteChannel(channelId)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(UpdateChannel);