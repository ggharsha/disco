import React from "react";
import ServerListItem from "./public_server_list_item";

export default class PublicServers extends React.Component {
    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUser.id);
        this.props.fetchServers();
    }

    render() {
        if (!this.props.servers) return null;
        return (
            <div className="public-servers-container">
                <span>
                    &times;
                </span>
                <ul className="public-servers-list">
                    {this.props.servers.map(server => (
                        <ServerListItem 
                            server={server} 
                            fetchServer={this.props.fetchServer}
                            createMembership={this.props.createMembership}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}