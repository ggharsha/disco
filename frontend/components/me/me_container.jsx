import React from "react";
import { connect } from "react-redux";
import Me from "./me";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    // fetch direct message, friendship list actions
});


export default connect(mSTP, mDTP)(Me);