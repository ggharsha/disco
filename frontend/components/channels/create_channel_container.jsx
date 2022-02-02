import React from "react";
import { connect } from "react-redux";
import { createChannel, fetchChannel } from "../../actions/channel_actions";
import { fetchServer } from "../../actions/server_actions";
import CreateChannel from "./create_channel";
import { closeModal } from "../../actions/modal_actions";

// selectors start
const parseServerId = url => {
    const urlArr = url.split("/");
    return parseInt(urlArr[2]);
};
// selectors end

const mSTP = (state, ownProps) => ({
    currentServer: state.entities.servers[parseServerId(ownProps.history.location.pathname)],
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.channelErrors
});

const mDTP = dispatch => ({
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    fetchChannel: channelId => dispatch(fetchChannel(channelId)),
    createChannel: (channel, serverId) => dispatch(createChannel(channel, serverId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(CreateChannel);