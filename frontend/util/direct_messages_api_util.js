export const fetchAllDms = () => (
    $.ajax({
        url: `api/direct_messages`
    })
);

export const fetchDm = dmId => (
    $.ajax({
        url: `api/direct_messages/${dmId}`
    })
);

export const createDm = (conversationId, direct_message) => (
    $.ajax({
        url: `api/conversations/${conversationId}/direct_messages`,
        method: `POST`,
        data: { direct_message }
    })
);

export const updateDm = direct_message => (
    $.ajax({
        url: `api/direct_messages/${direct_message.id}`,
        method: `PATCH`,
        data: { direct_message }
    })
);

export const deleteDm = dmId => (
    $.ajax({
        url: `api/direct_messages/${dmId}`,
        method: `DELETE`
    })
);