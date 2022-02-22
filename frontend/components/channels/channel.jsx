import React from "react";
import UserListItem from "./user_list_item";
import MessagesContainer from "./messages_container";
import { Link } from "react-router-dom";
import ChannelList from "./channel_list";

export default class Channel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUserId)
        .then(() => this.props.fetchServer(this.props.match.params.serverId))
        .then(() => this.props.fetchChannel(this.props.match.params.channelId))
    }

    render() {
        if (!this.props.server || !this.props.channel || !this.props.currentUser) return null;
        const serverOptions = this.props.server.ownerId === this.props.currentUserId ? (
            <p
                className="server-name-down-arrow"
                onClick={() => this.props.openModal('updateServer')}
            >
                &#8964;
            </p>
        ) : (<p
            className="server-name-down-arrow"
            onClick={() => this.props.openModal('leaveServer')}
        >
            &#8964;
        </p>);

        const channelOptions = this.props.server.ownerId === this.props.currentUserId ? (
            <span 
                className="add-channel"
                onClick={() => this.props.openModal('createChannel')}
            >+</span>
        ) : null;
        return (
            <div className="channel-div">
                <div className="server-name">
                    <p className="server-name-text">
                        {this.props.server.serverName}
                    </p>
                    {serverOptions}
                </div>
                <div className="channel-list">
                    <ChannelList 
                        channels={this.props.channels}
                        server={this.props.server}
                        currentUser={this.props.currentUser}
                        history={this.props.history}
                        openModal={this.props.openModal}
                        fetchChannel={this.props.fetchChannel}
                        channelOptions={channelOptions}
                    />
                    {/* <ul className="channels">
                        <li className="text-channels-header">
                            <span>TEXT CHANNELS</span>
                            {channelOptions}
                        </li>
                        {this.props.channels.map(channel => (
                            this.props.server.ownerId === this.props.currentUserId ? 
                            <Link 
                                key={channel.id} 
                                to={`/channels/${this.props.server.id}/${channel.id}`}
                            >
                                <li
                                    onClick={(e) => this.handleChange(e, channel)}
                                    className='channel-list-item'
                                    id={channel.id}
                                >
                                    <span className="chan-hashtag">#</span>&nbsp;&nbsp;{channel.channelName}
                                        <span className="chan-cog"><i
                                            className="fas fa-cog"
                                            onClick={() => this.props.openModal('updateChannel')}
                                        /></span>
                                </li>
                            </Link> : 
                            <Link
                                key={channel.id}
                                to={`/channels/${this.props.server.id}/${channel.id}`}
                            >
                                <li
                                    onClick={(e) => this.handleChange(e, channel)}
                                    className='channel-list-item'
                                    id={channel.id}
                                >
                                    <span className="chan-hashtag">#</span>&nbsp;&nbsp;{channel.channelName}
                                </li>
                            </Link>
                        ))}
                    </ul> */}
                </div>
                <div className="channel-main">
                    <MessagesContainer 
                        channel={this.props.channel} 
                        channelId={this.props.channel.id}
                        cableApp={this.props.cableApp}
                    />
                    <p id="channel-header-name">
                        <span>#</span>&nbsp;&nbsp;{this.props.channel.channelName}
                    </p>
                    <div className="channel-topic">

                    </div>
                </div>
                <div className="user-list">
                    <ul className="users">
                        <li className="member-count">
                            MEMBERS - {this.props.users.length}
                        </li>
                        {this.props.users.map(user => (
                            <UserListItem 
                                key={user.id} 
                                user={user} 
                                fetchUser={this.props.fetchUser} 
                            />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}