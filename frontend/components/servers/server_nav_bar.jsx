import React from "react";
import ServerNavIcon from "./server_nav_icon";
import { Link } from "react-router-dom";

export default class ServerNavBar extends React.Component {
    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUser.id)
    }

    render() {
        const { servers, fetchServer } = this.props;
        if (!this.props.currentUser) return null
        return (
            <div>
                <div className="server-div">
                    <ul className="server-list">
                        <li className="profile server-icon"></li>
                        {servers.map(server => (
                            <ServerNavIcon key={server.id} server={server} fetchServer={fetchServer} />
                        ))}
                    </ul>
                </div>
                <div id="channel-bg">
                    <div id="own-settings">
                        <img id="own-avatar" src={this.props.currentUser.photoUrl} />
                        <div id="handle">
                            <p id="own-username">{this.props.currentUser.username}</p>
                            <p id="own-tag">#{this.props.currentUser.tag}</p>
                        </div>
                        <div id="own-mic">
                            <i className="fas fa-microphone" />
                        </div>
                        <div id="own-headphones">
                            <i className="fas fa-headphones" />
                        </div>
                        <div id="own-gear">
                            <i className="fas fa-cog" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
