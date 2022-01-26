import React from "react";
import { connect } from "react-redux";
import ServerNavBar from "./server_nav_bar";
import { fetchServer } from "../../actions/server_actions";

const mSTP = state => ({
    servers: Object.values(state.servers)
});

const mDTP = dispatch => ({
    fetchServer: serverId => dispatch(fetchServer(serverId))
});

export default connect(mSTP, mDTP)(ServerNavBar);