import React from "react";
import ServerListItem from "./public_server_list_item";

export default class PublicServers extends React.Component {
    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUser.id)
        .then(() => this.props.fetchServers());
    }

    render() {
        if (!this.props.servers) return null;
        return (
            <div className="public-servers-container">
                <span 
                    className="close-public-server-modal"
                    onClick={() => this.props.closeModal()}
                >
                    &times;
                </span>
                <h3 className="join-public-server-header">Join a server</h3>
                <ul className="public-servers-list">
                    {this.props.servers.map(server => (
                        <ServerListItem 
                            key={server.id}
                            server={server} 
                            fetchServer={this.props.fetchServer}
                            createMembership={this.props.createMembership}
                            currentUser={this.props.currentUser}
                            closeModal={this.props.closeModal}
                            history={this.props.history}
                            fetchCurrentUser={this.props.fetchCurrentUser}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}