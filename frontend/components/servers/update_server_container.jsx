import React from "react";
import { connect } from "react-redux";
import {
    fetchServer,
    updateServer,
    deleteServer
} from '../../actions/server_actions';
import { closeModal } from "../../actions/modal_actions";
import UpdateServer from "./update_server";

// selectors start
const parseServerId = (url) => {
    const urlArr = url.split("/");
    return parseInt(urlArr[2]);
};
// selectors end

const mSTP = (state, ownProps) => ({
    currentServer: state.entities.servers[parseServerId(ownProps.history.location.pathname)],
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.serverErrors
});

const mDTP = dispatch => ({
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    updateServer: server => dispatch(updateServer(server)),
    deleteServer: serverId => dispatch(deleteServer(serverId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(UpdateServer);