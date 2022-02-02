export const createConversationMembership = conversationMembership => (
    $.ajax({
        url: `api/conversation_memberships`,
        method: `POST`,
        data: { conversationMembership }
    })
);

export const deleteConversationMembership = conversationMembershipId => (
    $.ajax({
        url: `api/conversation_memberships/${conversationMembershipId}`,
        method: `DELETE`
    })
);