import * as ConversationApiUtil from '../util/conversations_api_util';

export const RECEIVE_ALL_CONVERSATIONS = 'RECEIVE_ALL_CONVERSATIONS';
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';
export const REMOVE_CONVERSATION = 'REMOVE_CONVERSATION';

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

