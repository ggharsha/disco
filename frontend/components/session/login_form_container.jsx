import React from "react";
import SessionForm from "./session_form";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";

const mSTP = state => ({
    form: { email: '', password: '' }
});

const mDTP = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);