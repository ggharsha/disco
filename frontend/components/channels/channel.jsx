import React from "react";
import UserListItem from "./user_list_item";
import ChannelListItem from "./channel_list_item";
import { Link } from "react-router-dom";

export default class Channel extends React.Component {
    componentDidMount() {
        this.props.fetchServer(this.props.match.params.serverId);
        this.props.fetchChannel(this.props.match.params.channelId);
    }

    render() {
        if (!this.props.server) return null;
        return (
            <div className="channel-div">
                <div className="server-name">
                    <p className="server-name-text">{this.props.server.serverName}</p>
                </div>
                <div className="channel-list">
                    <ul className="channels">
                        {this.props.channels.map(channel => (
                            <Link onClick={() => this.props.fetchChannel(channel.id)} key={channel.id} to={`/channels/${this.props.server.id}/${channel.id}`}>
                                <ChannelListItem channel={channel} />
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="channel-main">
                    <div className="channel-topic">

                    </div>
                </div>
                <div className="user-list">
                    <ul className="users">
                        {this.props.users.map(user => (
                            <UserListItem key={user.id} user={user} fetchUser={this.props.fetchUser} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}