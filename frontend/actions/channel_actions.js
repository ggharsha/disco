import * as ChannelApiUtil from '../util/channels_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

const receiveChannel = channel => ({
    type: RECEIVE_CHANNEL,
    channel
});

const removeChannel = channel => ({
    type: REMOVE_CHANNEL,
    channel
});

const receiveErrors = errors => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
});

export const fetchChannel = channelId => dispatch => (
    ChannelApiUtil.fetchChannel(channelId)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const createChannel = (channel, serverId) => dispatch => (
    ChannelApiUtil.createChannel(channel, serverId)
    .then(channel => dispatch(receiveChannel(channel)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateChannel = (channel, channelId) => dispatch => (
    ChannelApiUtil.updateChannel(channel, channelId)
    .then(channel => dispatch(receiveChannel(channel)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteChannel = channelId => dispatch => (
    ChannelApiUtil.deleteChannel(channelId)
    .then(channel => dispatch(removeChannel(channel)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);