import React from "react";
import SessionForm from "./session_form";
import { connect } from "react-redux";

const mSTP = state => ({
    form: { email: '', password: '' }
});

const mDTP = dispatch => ({
    
});

export default connect(mSTP, mDTP)(SessionForm);