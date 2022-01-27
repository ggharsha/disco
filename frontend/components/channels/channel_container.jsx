import React from "react";
import { connect } from "react-redux";
import Channel from "./channel";
import { updateChannel, deleteChannel, createChannel, fetchChannel } from "../../actions/channel_actions";
import { fetchServer } from "../../actions/server_actions";
import { fetchUser } from "../../actions/users_actions";

const mSTP = (state, ownProps) => ({
    channel: state.entities.channels[ownProps.match.params.channelId],
    server: state.entities.servers[ownProps.match.params.serverId],
    users: Object.values(state.entities.users)
});

const mDTP = dispatch => ({
    fetchChannel: channelId => dispatch(fetchChannel(channelId)),
    createChannel: (channel, serverId) => dispatch(createChannel(channel, serverId)),
    updateChannel: (channel, channelId) => dispatch(updateChannel(channel, channelId)),
    deleteChannel: channelId => dispatch(deleteChannel(channelId)),
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(Channel);