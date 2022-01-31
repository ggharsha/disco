import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { createServer } from "../../actions/server_actions";
import { createChannel } from "../../actions/channel_actions";
import { fetchCurrentUser } from "../../actions/session_actions";
import CreateServer from "./create_server";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createServer: server => dispatch(createServer(server)),
    createChannel: channel => dispatch(createChannel(channel)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId))
});

export default connect(mSTP, mDTP)(CreateServer);