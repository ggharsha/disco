import React from "react";

const ServerNavIcon = ({ server }) => (
    <li className="server-icon">
        {server.serverName[0].toUpperCase()}
    </li>
);

export default ServerNavIcon;