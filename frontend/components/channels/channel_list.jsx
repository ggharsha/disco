import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ChannelList = ({ channels, server, currentUser, openModal, fetchChannel, channelOptions, match }) => {
    const paramsChannel = parseInt(match.params.channelId);
    const [currentChannel, setCurrentChannel] = useState(paramsChannel);

    const handleClick = channel => {
        setCurrentChannel(channel.id);
        fetchChannel(channel.id);
    };

    const channelText = channel => {
        if (server.ownerId === currentUser.id && currentChannel === channel.id) {
            return (<li
                onClick={() => handleClick(channel)}
                className='channel-list-item selected-channel'
            >
                <span className="chan-hashtag">#</span>&nbsp;&nbsp;{channel.channelName}
                <span className="chan-cog"><i
                    className="fas fa-cog"
                    onClick={() => openModal('updateChannel')}
                /></span>
            </li>)
        } else if (server.ownerId === currentUser.id && currentChannel !== channel.id) {
            return (<li
                onClick={() => handleClick(channel)}
                className='channel-list-item'
            >
                <span className="chan-hashtag">#</span>&nbsp;&nbsp;{channel.channelName}
                <span className="chan-cog"><i
                    className="fas fa-cog"
                    onClick={() => openModal('updateChannel')}
                /></span>
            </li>)
        } else if (server.ownerId !== currentUser.id && currentChannel === channel.id) {
            return (<li
                onClick={() => handleClick(channel)}
                className='channel-list-item selected-channel'
            >
                <span className="chan-hashtag">#</span>&nbsp;&nbsp;{channel.channelName}
            </li>)
        } else {
            return (<li
                onClick={() => handleClick(channel)}
                className='channel-list-item'
            >
                <span className="chan-hashtag">#</span>&nbsp;&nbsp;{channel.channelName}
            </li>)
        }
    };

    return (
        <ul className="channels">
            <li className="text-channels-header">
                <span>TEXT CHANNELS</span>
                {channelOptions}
            </li>
            {channels.map(channel => (
                <Link
                    key={channel.id}
                    to={`/channels/${server.id}/${channel.id}`}
                >
                    {channelText(channel)}
                </Link> 
            ))}
        </ul>
    );
};

export default ChannelList;