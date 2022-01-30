import React from "react";
import UserListItem from "./user_list_item";
import { Link } from "react-router-dom";

export default class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChannelNav = this.handleChannelNav.bind(this);
    }

    componentDidMount() {
        this.props.fetchServer(this.props.match.params.serverId)
        .then(() => this.props.fetchChannel(this.props.match.params.channelId))
        .then(() => this.handleChannelNav());
    }

    componentDidUpdate() {
        this.handleChannelNav();
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
        if (!this.props.server || !this.props.channel) return null;
        this.handleChannelNav();
        return (
            <div className="channel-div">
                <div className="server-name">
                    <p className="server-name-text">
                        {this.props.server.serverName}
                    </p>
                </div>
                <div className="channel-list">
                    <ul className="channels">
                        <li className="text-channels-header">TEXT CHANNELS</li>
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