import React from "react"

const ServerListItem = ({ server, fetchServer, createMembership, currentUser }) => {
    const imageArr = [
        window.randServ1, 
        window.randServ2, 
        window.randServ3, 
        window.randServ4
    ];
    const randomIdx = Math.floor(Math.random() * 4);
    const randomImg = imageArr[randomIdx];

    if (!currentUser.serversJoined.includes(server.id)) {
        return (
            <li>
                <img
                    src={randomImg}
                    className="server-list-rand-icon"
                />
                {server.serverName}
                <button onClick={() => createMembership({
                    user_id: currentUser.id,
                    server_id: server.id
                })}>
                    Join
                </button>
            </li>
        )}
}

export default ServerListItem;