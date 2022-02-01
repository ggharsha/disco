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

export const createDm = (conversationId, dm) => (
    $.ajax({
        url: `api/conversations/${conversationId}/direct_messages`,
        method: `POST`,
        data: { dm }
    })
);

export const updateDm = dm => (
    $.ajax({
        url: `api/direct_messages/${dm.id}`,
        method: `PATCH`,
        data: { dm }
    })
);

export const deleteDm = dmId => (
    $.ajax({
        url: `api/direct_messages/${dmId}`,
        method: `DELETE`
    })
);