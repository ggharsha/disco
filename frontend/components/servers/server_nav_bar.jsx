import React from "react";
import ServerNavIcon from "./server_nav_icon";

const ServerNavBar = ({ servers, fetchServer }) => {
    let serverList;
    servers.length ? serverList = (
        servers.map(server => (
            <ServerNavIcon key={server.id} server={server} fetchServer={fetchServer} />
        ))
    ) : serverList = (
        <li>Join server placeholder icon</li>
    )
    return (
        <div className="server-div">
            <ul className="server-list">
                <li className="profile"></li>
                {serverList}
            </ul>
        </div>
    )
};

export default ServerNavBar;