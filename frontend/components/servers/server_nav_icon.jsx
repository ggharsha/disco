import React from "react";

const ServerNavIcon = ({ server, fetchServer }) => (
    <li className="server-icon" onClick={() => fetchServer(server.id)}>{server.name}</li>
);

export default ServerNavIcon;