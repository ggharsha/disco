import React from "react";
import ServerNavIcon from "./server_nav_icon";

const ServerNavBar = ({ servers, fetchServer }) => (
    <div className="server-div">
        <ul className="server-list">
            <li className="profile server-icon"></li>
            {servers.map(server => (
                <ServerNavIcon key={server.id} server={server} fetchServer={fetchServer} />
            ))}
        </ul>
    </div>
);

export default ServerNavBar;