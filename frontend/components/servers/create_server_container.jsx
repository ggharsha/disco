import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { createServer, fetchServer} from "../../actions/server_actions";
import { fetchCurrentUser } from "../../actions/session_actions";
import CreateServer from "./create_server";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createServer: server => dispatch(createServer(server)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    fetchServer: serverId => dispatch(fetchServer(serverId))
});

export default connect(mSTP, mDTP)(CreateServer);