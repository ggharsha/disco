import React from "react";
import UserListItem from "./user_list_item";
import MessagesContainer from "./messages_container";
import { Link } from "react-router-dom";

export default class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChannelNav = this.handleChannelNav.bind(this);
        this.handleServerNav = this.handleServerNav.bind(this);
    }

    componentDidMount() {
        this.handleChannelNav();
        this.handleServerNav();

        this.props.fetchCurrentUser(this.props.currentUserId)
        .then(() => this.props.fetchServer(this.props.match.params.serverId))
        .then(() => this.props.fetchChannel(this.props.match.params.channelId))
    }

    componentDidUpdate() {
        this.handleChannelNav();
        this.handleServerNav();
    }

    handleServerNav() {
        let servers = document.getElementsByClassName('server-icon');
        servers = Array.prototype.slice.call(servers);

        let preselected = document.getElementsByClassName('selected-server');
        preselected = Array.prototype.slice.call(preselected);

        if (preselected.length === 0) {
            servers.forEach(server => {
                if (server.id === this.props.match.params.serverId) {
                    server.classList.add('selected-server');
                } else if (!this.props.match.params.serverId) {
                    server.classList.add('selected-server');
                }
        })};
    }

    handleChannelNav() {
        let channels = document.getElementsByClassName('channel-list-item');
        channels = Array.prototype.slice.call(channels);

        let preselected = document.getElementsByClassName('selected-channel');
        preselected = Array.prototype.slice.call(preselected);

        if (preselected.length === 0) {
            channels.forEach(channel => {
                if (channel.id === this.props.match.params.channelId) channel.classList.add('selected-channel');
        })};
    }

    handleChange(e, channel) {
        this.props.fetchChannel(channel.id);
        let channels = document.getElementsByClassName('channel-list-item');
        channels = Array.prototype.slice.call(channels);
        channels.map(channel => {
            if (channel.classList.contains('selected-channel')) channel.classList.remove('selected-channel')
        });
        e.currentTarget.classList.add('selected-channel');
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
        ) : null;
        // ) : (<p
        //     className="server-name-down-arrow"
        //     onClick={() => this.props.openModal('leaveServer')}
        // >
        //     &#8964;
        // </p>);

        const channelOptions = this.props.server.ownerId === this.props.currentUserId ? (
            <span 
                className="add-channel"
                onClick={() => this.props.openModal('createChannel')}
            >+</span>
        ) : null;
        this.handleChannelNav();
        return (
            <div className="channel-div">
                <div className="server-name">
                    <p className="server-name-text">
                        {this.props.server.serverName}
                    </p>
                    {serverOptions}
                </div>
                <div className="channel-list">
                    <ul className="channels">
                        <li className="text-channels-header">
                            <span>TEXT CHANNELS</span>
                            {channelOptions}
                        </li>
                        {this.props.channels.map(channel => (
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
                    </ul>
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