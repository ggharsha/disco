import React from "react";
import ServerNavIcon from "./server_nav_icon";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default class ServerNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.checkDefaultChannel = this.checkDefaultChannel.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUser.id);
    }

    checkDefaultChannel(server) {
        return server.channels[0]
    }

    render() {
        const { servers, fetchServer, fetchServers, openModal } = this.props;
        if (!this.props.currentUser && servers[0]) return null
        return (
            <div>
                <div className="server-div">
                    <ul className="server-list">
                        <Link to={"/channels/@me"}>
                            <li className="profile server-icon">
                                <i className="fab fa-discord" />
                            </li>
                            </Link>
                        <li className="disco-line" />
                            {servers.map(server => (
                                <Link 
                                    className="link-to-server" 
                                    onClick={() => fetchServer(server.id)}
                                    key={server.id} 
                                    to={`/channels/${server.id}/${this.checkDefaultChannel(server)}`}
                                >
                                    <ServerNavIcon 
                                        key={server.id} 
                                        server={server} 
                                    />
                                </Link>
                            ))}
                        <li className="disco-line" />
                        <li className="server-icon add-server">+</li>
                        <li className="server-icon public-servers">
                            <i className="fas fa-compass"/>
                        </li>
                    </ul>
                </div>
                <div id="channel-bg">
                    <div id="dm-line"></div>
                    <div id="own-settings">
                        <div id="own-attributes">
                            <img 
                                id="own-avatar" 
                                src={this.props.currentUser.photoUrl} 
                            />
                            <div id="handle">
                                <p id="own-username">
                                    {this.props.currentUser.username}
                                </p>
                                <p id="own-tag">
                                    #{this.props.currentUser.tag}
                                </p>
                            </div>
                        </div>
                        <div id="own-settings-icons">
                            <div id="own-mic">
                                <i className="fas fa-microphone" />
                            </div>
                            <div id="own-headphones">
                                <i className="fas fa-headphones" />
                            </div>
                            <div id="own-gear">
                                <i 
                                    className="fas fa-cog"
                                    onClick={() => openModal('updateUser')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="backdrop">
                </div>
            </div>
        )
    }
}