import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ServerNavBarList = ({ servers, fetchServer, fetchChannel, openModal, history }) => {
    const historyServer = history.location.pathname.includes("@me") ? null : parseInt(history.location.pathname.split("/")[2]);

    const [currentServer, setCurrentServer] = useState(historyServer);

    const checkDefaultChannel = server => (
        server.channels[0]
    );

    const handleClick = server => {
        setCurrentServer(server.id);
        fetchServer(server.id)
        .then(() => fetchChannel(checkDefaultChannel(server)));
    };

    const handleMeClick = () => {
        setCurrentServer(null);
    };

    const selectedServer = server => (
        <li className="server-icon selected-server">
            {server.serverName[0].toUpperCase()}
        </li>
    );

    const nonSelectedServer = server => (
        <li className="server-icon">
            {server.serverName[0].toUpperCase()}
        </li>
    );

    const me = (
        <Link to={"/channels/@me"}
            onClick={() => handleMeClick()}
        >
            {!currentServer ? <li
                className="profile server-icon selected-server"
                id="disco-icon"
            >
                <i className="fab fa-discord" />
            </li> : <li
                className="profile server-icon"
                id="disco-icon"
            >
                <i className="fab fa-discord" />
            </li>}
        </Link>
    );

    return (
        <ul className="server-list">
            {me}
            <li className="disco-line" />
            {servers.map(server => (
                <Link
                    className="link-to-server"
                    onClick={() => handleClick(server)}
                    key={server.id}
                    to={`/channels/${server.id}/${checkDefaultChannel(server)}`}
                >
                    {server.id === currentServer ? selectedServer(server) : nonSelectedServer(server)}
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
                <i className="fas fa-compass" />
            </li>
        </ul>
    );
};

export default ServerNavBarList;