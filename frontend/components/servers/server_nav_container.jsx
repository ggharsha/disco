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
const selectServers = state => (
    state.entities.servers ? Object.values(state.entities.servers) : []
);
// selectors end

const mSTP = state => ({
    servers: selectServers(state),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    fetchServers: () => dispatch(fetchServers()),
    openModal: modalType => dispatch(openModal(modalType)),
    fetchChannel: channelId => dispatch(fetchChannel(channelId))
});

export default connect(mSTP, mDTP)(ServerNavBar);