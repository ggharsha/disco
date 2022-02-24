import React from "react";
import { useState, useEffect, useRef } from "react";

const ServerHeader = ({ server, openModal, currentUser }) => {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef();

    const handleClick = () => {
        if (menu) setMenu(false);
        else setMenu(true);
    };

    useEffect(() => {
        const handler = event => {
            if (!menuRef.current.contains(event.target)) {
                setMenu(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => document.removeEventListener("mousedown", handler);
    })

    const ownerOptions = (
        <div className="server-header-options" ref={menuRef}>
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
        <div className="server-header-options" ref={menuRef}>
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
            <i className="fas fa-chevron-down" />
        </p>
    ) : (
        <p
            className="server-name-down-arrow"
            onClick={() => handleClick()}
        >
            <i className="fas fa-times" />
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