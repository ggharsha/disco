import { connect } from "react-redux";
import { updateUser, deleteUser } from "../../actions/users_actions";
import { logout, fetchCurrentUser } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import { fetchServer } from "../../actions/server_actions";
import UpdateUser from "./update_user";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mDTP = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
    deleteUser: userId => dispatch(deleteUser(userId)),
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId))
});

export default connect(mSTP, mDTP)(UpdateUser);