export const fetchChannel = channelId => (
    $.ajax({
        url: `api/channels/${channelId}`
    })
);

export const createChannel = (channel, serverId) => (
    $.ajax({
        url: `api/servers/${serverId}/channels`,
        method: `POST`,
        data: { channel }
    })
);

export const updateChannel = channel => (
    $.ajax({
        url: `api/channels/${channel.id}`,
        method: `PATCH`,
        data: { channel }
    })
);

export const deleteChannel = channelId => (
    $.ajax({
        url: `api/channels/${channelId}`,
        method: `DELETE`
    })
);