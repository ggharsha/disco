import React from "react";

const ServerNavIcon = ({ server, handleChange }) => (
    <li 
        className="server-icon"
        onClick={(e) => handleChange(e, server)}
    >
        {server.serverName[0].toUpperCase()}
    </li>
);

export default ServerNavIcon;