import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import RegisterForm from "./register_form";

const mSTP = state => ({
    form: { email: '', username: '', password: '' },
    errors: state.errors.sessionErrors
});

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(RegisterForm);