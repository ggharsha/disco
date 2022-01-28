import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
// import CreateServerContainer from '../servers/create_server_container';
import UpdateUserContainer from '../servers/update_user_container';
// import UpdateServerContainer from '../servers/update_server_container';

function Modal({ modal, closeModal }) {
    if (!modal) return null;
    let component;
    switch (modal) {
        case 'createServer':
            // component = <CreateServerContainer />;
            break;
        case 'updateUser':
            component = <UpdateUserContainer />;
            break;
        case 'updateServer':
            // component = <UpdateServerContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mSTP = state => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);