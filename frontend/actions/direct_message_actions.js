import * as DmApiUtil from '../util/direct_messages_api_util';

export const RECEIVE_ALL_DMS = 'RECEIVE_ALL_DMS';
export const RECEIVE_DM = 'RECEIVE_DM';
export const REMOVE_DM = 'REMOVE_DM';

const receiveAllDirectMessages = directMessages => ({
    type: RECEIVE_ALL_DMS,
    directMessages
});

export const receiveDirectMessage = directMessage => ({
    type: RECEIVE_DM,
    directMessage
});

const removeDirectMessage = directMessageId => ({
    type: REMOVE_DM,
    directMessageId
});

export const fetchAllDms = () => dispatch => (
    DmApiUtil.fetchAllDms()
    .then(directMessages => dispatch(receiveAllDirectMessages(directMessages)))
);

export const fetchDm = dmId => dispatch => (
    DmApiUtil.fetchDm(dmId)
    .then(directMessage => dispatch(receiveDirectMessage(directMessage)))
);

export const createDm = (conversationId, dm) => dispatch => (
    DmApiUtil.createDm(conversationId, dm)
    .then(directMessage => dispatch(receiveDirectMessage(directMessage)))
);

export const updateDm = dm => dispatch => (
    DmApiUtil.updateDm(dm)
    .then(directMessage => dispatch(receiveDirectMessage(directMessage)))
);

export const deleteDm = dmId => dispatch => (
    DmApiUtil.deleteDm(dmId)
    .then(directMessageId => dispatch(removeDirectMessage(directMessageId)))
);