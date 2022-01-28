import React from "react";

const ServerNavIcon = ({ server, fetchServer }) => (
    <li 
        className="server-icon" 
        onClick={() => fetchServer(server.id)}
    >
        {server.serverName[0].toUpperCase()}
    </li>
);

export default ServerNavIcon;