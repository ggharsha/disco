import { createConversation } from '../../actions/conversation_actions';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateConversation from './create_conversation';
import { fetchConversation } from '../../actions/conversation_actions';
import { fetchCurrentUser } from '../../actions/session_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    conversations: state.entities.conversations,
    errors: state.errors.conversationErrors
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createConversation: conversation => dispatch(createConversation(conversation)),
    fetchConversation: conversationId => dispatch(fetchConversation(conversationId)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId))
});

export default connect(mSTP, mDTP)(CreateConversation);