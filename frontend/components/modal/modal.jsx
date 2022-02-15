import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import UpdateUserContainer from '../servers/update_user_container';
import CreateServerContainer from '../servers/create_server_container';
import UpdateServerContainer from '../servers/update_server_container';
import PublicServerContainer from '../servers/public_server_container';
// import CreateConversationContainer from '../conversations/create_conversation_container';
// import DeleteMessageContainer from '../channels/delete_message_container';
// import DeleteDirectMessageContainer from '../conversations/delete_direct_message_container';
import CreateChannelContainer from '../channels/create_channel_container';
import LeaveServerContainer from '../servers/leave_server_container';
import UpdateChannelContainer from '../channels/update_channel_container';

function Modal({ modal, closeModal, history }) {
    if (!modal) return null;
    let component;
    switch (modal) {
        case 'createServer':
            component = <CreateServerContainer history={history} />;
            break;
        case 'updateUser':
            component = <UpdateUserContainer />;
            return component;
        case 'updateServer':
            component = <UpdateServerContainer history={history} />;
            break;
        case 'createChannel':
            component = <CreateChannelContainer history={history} />;
            break;
        case 'publicServers':
            component = <PublicServerContainer history={history} />;
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
        case 'leaveServer':
            component = <LeaveServerContainer history={history} />;
            break;
        case 'updateChannel':
            component = <UpdateChannelContainer history={history} />;
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