import React from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/users_actions";
import { login } from "../../actions/session_actions";
import RegisterForm from "./register_form";

const mSTP = state => ({
    form: { email: '', username: '', password: '' }
});

const mDTP = dispatch => ({
    createUser: user => dispatch(createUser(user)),
    login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(RegisterForm);