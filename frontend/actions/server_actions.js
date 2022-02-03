import * as ServerApiUtil from '../util/servers_api_util';

export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';

const receiveAllServers = servers => ({
    type: RECEIVE_ALL_SERVERS,
    servers
});

const receiveServer = server => ({
    type: RECEIVE_SERVER,
    server
});

const removeServer = serverId => ({
    type: REMOVE_SERVER,
    serverId
});

const receiveErrors = errors => ({
    type: RECEIVE_SERVER_ERRORS,
    errors
})

export const fetchServers = () => dispatch => {
    return ServerApiUtil.fetchServers()
    .then(servers => dispatch(receiveAllServers(servers)))
};

export const fetchServer = serverId => dispatch => {
    return ServerApiUtil.fetchServer(serverId)
    .then(server => dispatch(receiveServer(server)))
};

export const createServer = server => dispatch => {
    return ServerApiUtil.createServer(server)
    .then(server => dispatch(receiveServer(server)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const updateServer = server => dispatch => {
    return ServerApiUtil.updateServer(server)
    .then(server => dispatch(receiveServer(server)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const deleteServer = serverId => dispatch => {
    return ServerApiUtil.deleteServer(serverId)
    .then(server => {
        // debugger
        dispatch(removeServer(server))
    },
        errors => dispatch(receiveErrors(errors.responseJSON)))
};