import { createConversation } from '../../actions/conversation_actions';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateConversation from './create_conversation';

const mSTP = state => ({
    currentUser: state.entitites.users[state.session.id],
    conversations: state.entities.conversations
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createConversation: conversation => dispatch(createConversation(conversation))
});

export default connect(mSTP, mDTP)(CreateConversation);