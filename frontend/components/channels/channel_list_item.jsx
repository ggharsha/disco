import React from 'react';

const ChannelListItem = ({ channel }) => (
    <li className='channel-list-item'>
        # {channel.channelName}
    </li>
);

export default ChannelListItem;