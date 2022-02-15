import React from "react";
import { connect } from "react-redux";
import { createConversation } from "../../actions/conversation_actions";
import { createConversationMembership } from "../../actions/conversation_membership_actions";
import { openModal } from "../../actions/modal_actions";
import SearchConvo from "./search_convo";

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(SearchConvo)