import * as ServerApiUtil from '../util/session_api_util';

export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS';
export const RECEIVE_SERVER = 'RECEIVER_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';

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
    .then(server => dispatch(receiveServer(server)))
};

export const updateServer = server => dispatch => {
    return ServerApiUtil.updateServer(server)
    .then(server => dispatch(receiveServer(server)))
};

export const deleteServer = serverId => dispatch => {
    return ServerApiUtil.deleteServer(serverId)
    .then(() => dispatch(removeServer(serverId)))
};