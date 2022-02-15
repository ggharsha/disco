import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import SearchConvo from "./search_convo";

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mDTP)(SearchConvo)