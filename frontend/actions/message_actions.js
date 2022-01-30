import * as MessageApiUtil from '../util/messages_api_util';

export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

const receiveAllMessages = messages => ({
    type: RECEIVE_ALL_MESSAGES,
    messages
});

const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
});

const removeMessage = messageId => ({
    type: REMOVE_MESSAGE,
    messageId
});

export const fetchAllMessages = () => dispatch => (
    MessageApiUtil.fetchAllMessages()
    .then(messages => dispatch(receiveAllMessages(messages)))
);

export const fetchMessage = messageId => dispatch => (
    MessageApiUtil.fetchMessage(messageId)
    .then(message => dispatch(receiveMessage(message)))
);

export const createMessage = message => dispatch => (
    MessageApiUtil.createMessage(message)
    .then(message => dispatch(receiveMessage(message)))
);

export const updateMessage = message => dispatch => (
    MessageApiUtil.updateMessage(message)
    .then(message => dispatch(receiveMessage(message)))
);

export const deleteMessage = messageId => dispatch => (
    MessageApiUtil.deleteMessage(messageId)
    .then(() => dispatch(removeMessage(messageId)))
);