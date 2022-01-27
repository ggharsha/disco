import React from "react";
import { connect } from "react-redux";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    // fetch direct message, friendship list actions
});
