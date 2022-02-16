import * as ConversationApiUtil from '../util/conversations_api_util';

export const RECEIVE_ALL_CONVERSATIONS = 'RECEIVE_ALL_CONVERSATIONS';
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';
export const REMOVE_CONVERSATION = 'REMOVE_CONVERSATION';
export const RECEIVE_CONVERSATION_ERRORS = 'RECEIVE_CONVERSATION_ERRORS';

const receiveAllConversations = conversations => ({
    type: RECEIVE_ALL_CONVERSATIONS,
    conversations
});

const receiveConversation = payload => ({
    type: RECEIVE_CONVERSATION,
    payload
});

const removeConversation = conversationId => ({
    type: REMOVE_CONVERSATION,
    conversationId
});

const receiveErrors = errors => ({
    type: RECEIVE_CONVERSATION_ERRORS,
    errors
});

export const fetchAllConversations = () => dispatch => (
    ConversationApiUtil.fetchAllConversations()
    .then(conversations => dispatch(receiveAllConversations(conversations)))
);

export const fetchConversation = conversationId => dispatch => (
    ConversationApiUtil.fetchConversation(conversationId)
    .then(conversation => dispatch(receiveConversation(conversation)))
);

export const createConversation = conversation => dispatch => (
    ConversationApiUtil.createConversation(conversation)
    .then(conversation => dispatch(receiveConversation(conversation)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateConversation = conversation => dispatch => (
    ConversationApiUtil.updateConversation(conversation)
    .then(conversation => dispatch(receiveConversation(conversation)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteConversation = conversationId => dispatch => (
    ConversationApiUtil.deleteConversation(conversationId)
    .then(() => dispatch(removeConversation(conversationId)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
);