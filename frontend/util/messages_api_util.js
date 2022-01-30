export const fetchAllMessages = () => (
    $.ajax({
        url: `api/messages`
    })
);

export const fetchMessage = messageId => (
    $.ajax({
        url: `api/messages/${messageId}`
    })
);

export const createMessage = (channelId, message) => (
    $.ajax({
        url: `api/channels/${channelId}/messages`,
        method: `POST`,
        data: { message }
    })
);

export const updateMessage = message => (
    $.ajax({
        url: `api/messages/${message.id}`,
        method: `PATCH`,
        data: { message }
    })
);

export const deleteMessage = messageId => (
    $.ajax({
        url: `api/messages/${messageId}`,
        method: `DELETE`
    })
);