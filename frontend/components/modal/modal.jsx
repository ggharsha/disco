import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import UpdateUserContainer from '../servers/update_user_container';
import CreateServerContainer from '../servers/create_server_container';
// import UpdateServerContainer from '../servers/update_server_container';
// import PublicServerContainer from '../servers/public_server_container';
// import CreateConversationContainer from '../conversations/create_conversation_container';
// import DeleteMessageContainer from '../channels/delete_message_container';
// import DeleteDirectMessageContainer from '../conversations/delete_direct_message_container';

function Modal({ modal, closeModal }) {
    if (!modal) return null;
    let component;
    switch (modal) {
        case 'createServer':
            component = <CreateServerContainer />;
            break;
        case 'updateUser':
            component = <UpdateUserContainer />;
            return component;
        case 'updateServer':
            // component = <UpdateServerContainer />;
            break;
        case 'publicServer':
            // component = <PublicServerContainer />;
            break;
        case 'createConversation':
            // component = <CreateConversationContainer />;
            break;
        case 'deleteMessage':
            // component = <DeleteMessageContainer />;
            break;
        case 'deleteDirectMessage':
            // component = <DeleteDirectMessageContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
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