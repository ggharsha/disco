import React from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/users_actions";
import RegisterForm from "./register_form";

const mSTP = state => ({
    form: { email: '', username: '', password: '' }
});

const mDTP = dispatch => ({
    createUser: user => dispatch(createUser(user))
});

export default connect(mSTP, mDTP)(RegisterForm);