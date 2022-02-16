import React from "react";
import ServerNavIcon from "./server_nav_icon";
import { Link } from "react-router-dom";

export default class ServerNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.checkDefaultChannel = this.checkDefaultChannel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUser.id);
    }

    checkDefaultChannel(server) {
        return server.channels[0]
    }

    handleChange(e, server) {
        if (server) this.props.fetchServer(server.id);
        let servers = document.getElementsByClassName('server-icon');
        servers = Array.prototype.slice.call(servers);
        servers.map(server => {
            if (server.classList.contains('selected-server')) {
                server.classList.remove('selected-server')
            }
        });
        if (server) e.currentTarget.classList.add('selected-server');
        else servers[0].classList.add('selected-server');
    }

    render() {
        const { 
            servers, 
            fetchServer, 
            fetchServers, 
            openModal,
            fetchChannel 
        } = this.props;

        if ((!this.props.currentUser && servers[0]) || !servers) return null
        return (
            <div>
                <div className="server-div">
                    <ul className="server-list">
                        <Link to={"/channels/@me"}
                            onClick={(e) => this.handleChange(e)}>
                            <li 
                                className="profile server-icon"
                                id="disco-icon"
                            >
                                <i className="fab fa-discord" />
                            </li>
                        </Link>
                        <li className="disco-line" />
                            {servers.map(server => (
                                <Link 
                                    className="link-to-server" 
                                    onClick={() => fetchServer(server.id)
                                        .then(() => fetchChannel(this.checkDefaultChannel(server)))
                                        .then((e) => this.handleChange(e, server))}
                                    key={server.id} 
                                    to={`/channels/${server.id}/${this.checkDefaultChannel(server)}`}
                                >
                                    <ServerNavIcon 
                                        key={server.id} 
                                        server={server} 
                                    />
                                    {/* <span className="tooltiptext">
                                        {server.serverName}
                                    </span> */}
                                </Link>
                            ))}
                        <li className="disco-line" />
                        <li 
                            className="server-icon add-server"
                            onClick={() => openModal('createServer')}
                        >+</li>
                        <li 
                            className="server-icon public-servers"
                            onClick={() => openModal('publicServers')}
                        >
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