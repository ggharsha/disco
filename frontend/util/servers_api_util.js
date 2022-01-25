export const fetchServers = () => {
    return $.ajax({
        url: `api/servers`
    });
};

export const fetchServer = serverId => {
    return $.ajax({
        url: `api/servers/${serverId}`
    });
};

export const createServer = server => {
    return $.ajax({
        url: `api/servers`,
        method: `POST`,
        data: { server }
    });
};

export const updateServer = server => {
    return $.ajax({
        url: `api/servers/${server.id}`,
        method: `PATCH`,
        data: { server }
    });
};

export const deleteServer = serverId => {
    return $.ajax({
        url: `api/servers/${serverId}`,
        method: `DELETE`
    });
};