import React from "react";
import { connect } from "react-redux";
import ServerNavBar from "./server_nav_bar";
import { 
    fetchServer, 
    fetchServers 
} from "../../actions/server_actions";
import { fetchCurrentUser } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchChannel } from "../../actions/channel_actions";

// selectors start
const selectServers = state => {
    if (Object.keys(state.entities.servers).length === 0) return [];
    return state.entities.users[state.session.id].serversJoined.sort().map(serverId => (
        state.entities.servers[serverId]
    ))
};
// selectors end

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    servers: selectServers(state)
});

const mDTP = dispatch => ({
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    fetchServers: () => dispatch(fetchServers()),
    openModal: modalType => dispatch(openModal(modalType)),
    fetchChannel: channelId => dispatch(fetchChannel(channelId))
});

export default connect(mSTP, mDTP)(ServerNavBar);