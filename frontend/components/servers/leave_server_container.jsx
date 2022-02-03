import React from "react";
import { connect } from "react-redux";
import LeaveServer from "./leave_server";
import { fetchCurrentUser } from "../../actions/session_actions";
import { deleteMembership } from "../../actions/membership_actions";
import { closeModal } from "../../actions/modal_actions";
import { fetchServer } from "../../actions/server_actions";

// selectors start
const parseServerId = url => {
    const urlArr = url.split("/");
    return parseInt(urlArr[2]);
};
// selectors end

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    currentServer: state.entities.servers[parseServerId(ownProps.history.location.pathname)]
});

const mDTP = dispatch => ({
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    deleteMembership: membership => dispatch(deleteMembership(membership)),
    closeModal: () => dispatch(closeModal()),
    fetchServer: serverId => dispatch(fetchServer(serverId))
});

export default connect(mSTP, mDTP)(LeaveServer);