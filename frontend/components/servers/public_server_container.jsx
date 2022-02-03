import React from "react";
import { connect } from "react-redux";
import { fetchServers, fetchServer } from "../../actions/server_actions";
import { fetchCurrentUser } from "../../actions/session_actions";
import { createMembership } from "../../actions/membership_actions";
import { closeModal } from "../../actions/modal_actions";
import PublicServers from "./public_servers";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    servers: Object.values(state.entities.servers)
});

const mDTP = dispatch => ({
    fetchServers: () => dispatch(fetchServers()),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    createMembership: membership => dispatch(createMembership(membership)),
    closeModal: () => dispatch(closeModal()),
    fetchServer: serverId => dispatch(fetchServer(serverId))
});

export default connect(mSTP, mDTP)(PublicServers);