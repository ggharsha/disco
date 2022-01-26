import React from "react";
import { connect } from "react-redux";
import ServerNavBar from "./server_nav_bar";
import { fetchServer } from "../../actions/server_actions";
import { fetchCurrentUser } from "../../actions/session_actions";

// selectors start
const selectServers = state => (
    state.entities.servers ?  Object.values(state.entities.servers) : []
);
// selectors end


const mSTP = state => ({
    servers: selectServers(state),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId))
});

export default connect(mSTP, mDTP)(ServerNavBar);