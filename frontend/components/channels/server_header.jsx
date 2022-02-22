import React from "react";
import { useState } from "react";

const ServerHeader = ({ server, openModal, currentUser }) => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        if (menu) setMenu(false);
        else setMenu(true);
    };

    const ownerOptions = (
        <div className="server-header-options">
            <ul>
                <li 
                className="server-header-option"
                onClick={() => openModal("updateServer")}
                >
                    Update Server
                </li>
                <li 
                className="server-header-option leave-server"
                onClick={() => openModal("leaveServer")}
                >
                    Leave Server
                </li>
            </ul>
        </div>
    );

    const memberOptions = (
        <div className="server-header-options">
            <ul>
                <li 
                className="server-header-option leave-server"
                onClick={() => openModal("leaveServer")}
                >
                    Leave Server
                </li>
            </ul>
        </div>
    );

    const menuIcon = !menu ? (
        <p
            className="server-name-down-arrow"
            onClick={() => handleClick()}
        >
            &#8964;
        </p>
    ) : (
        <p
            className="server-name-down-arrow"
            onClick={() => handleClick()}
        >
            &times;
        </p>
    )

    return (
        <div className="server-name">
            <p className="server-name-text">
                {server.serverName}
            </p>
            {menuIcon}
            {menu && currentUser.id === server.ownerId ? ownerOptions : menu && currentUser.id !== server.ownerId ? memberOptions : null}
        </div>
    );
};

export default ServerHeader;