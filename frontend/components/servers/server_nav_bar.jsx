import React from "react";

const ServerNavBar = ({ servers }) => (
    <div>
        <ul>
            {servers.map(server => (
                <li key={server.id}>{server.name}</li>
            ))}
        </ul>
    </div>
);

export default ServerNavBar;