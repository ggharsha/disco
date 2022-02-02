import * as ConversationMembershipApiUtil from '../util/conversation_memberships_api_util';

export const RECEIVE_CONVERSATION_MEMBERSHIP = 'RECEIVE_CONVERSATION_MEMBERSHIP';
export const REMOVE_CONVERSATION_MEMBERSHIP = 'REMOVE_CONVERSATION_MEMBERSHIP';

const receiveConversationMembership = conversationMembership => ({
    type: RECEIVE_CONVERSATION_MEMBERSHIP,
    conversationMembership
});

const removeConversationMembership = conversationMembershipId => ({
    type: REMOVE_CONVERSATION_MEMBERSHIP,
    conversationMembershipId
});

export const createConversationMembership = conversationMembership => (
    ConversationMembershipApiUtil.createConversationMembership(conversationMembership)
    .then(conversationMembership => dispatch(receiveConversationMembership(conversationMembership)))
);

export const deleteConversationMembership = conversationMembershipId => (
    ConversationMembershipApiUtil.deleteConversationMembership(conversationMembershipId)
    .then(() => dispatch(removeConversationMembership(conversationMembershipId)))
);