import React from "react";
import { connect } from "react-redux";
import ServerNavBar from "./server_nav_bar";
import { fetchServer } from "../../actions/server_actions";

// selectors start
const selectServers = state => (
    state.servers ?  Object.values(state.servers) : []
);
// selectors end


const mSTP = state => ({
    servers: selectServers(state)
});

const mDTP = dispatch => ({
    fetchServer: serverId => dispatch(fetchServer(serverId))
});

export default connect(mSTP, mDTP)(ServerNavBar);