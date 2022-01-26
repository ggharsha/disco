import React from "react";
import ServerNavIcon from "./server_nav_icon";
import { Link } from "react-router-dom";

export default class ServerNavBar extends React.Component {
    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUser.id);
    }

    render() {
        const { servers, fetchServer } = this.props
        return (
            <div className="server-div">
                <ul className="server-list">
                    <li className="profile server-icon"></li>
                    {servers.map(server => (
                        <ServerNavIcon key={server.id} server={server} fetchServer={fetchServer} />
                    ))}
                </ul>
            </div>
        )
    }
}
