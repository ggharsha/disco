import React from "react";
import UserListItem from "./user_list_item";

export default class Channel extends React.Component {
    componentDidMount() {
        this.props.fetchServer(this.props.match.params.serverId);
        this.props.fetchChannel(this.props.match.params.channelId);
    }

    render() {
        return (
            <div className="channel-div">
                <div className="channel-list">

                </div>
                <div className="channel-main">

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