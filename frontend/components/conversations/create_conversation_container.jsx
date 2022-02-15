import { createConversation } from '../../actions/conversation_actions';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateConversation from './create_conversation';


export default connect()(CreateConversation);