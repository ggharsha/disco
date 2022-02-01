export const fetchAllConversations = () => (
    $.ajax({
        url: `api/conversations`
    })
);

export const fetchConversation = conversationId => (
    $.ajax({
        url: `api/conversations/${conversationId}`
    })
);

export const createConversation = conversation => (
    $.ajax({
        url: `api/conversations`,
        method: `POST`,
        data: { conversation }
    })
);

export const updateConversation = conversation => (
    $.ajax({
        url: `api/conversations/${conversation.id}`,
        method: `PATCH`,
        data: { conversation }
    })
);

export const deleteConversation = conversationId => (
    $.ajax({
        url: `api/conversations/${conversationId}`,
        method: `DELETE`
    })
);