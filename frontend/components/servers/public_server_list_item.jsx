import React from "react"

const ServerListItem = ({ 
    server, 
    fetchServer, 
    createMembership,
    fetchCurrentUser, 
    currentUser, 
    history, 
    closeModal }) => {
    const imageArr = [
        window.randServ1, 
        window.randServ2, 
        window.randServ3, 
        window.randServ4
    ];
    const randomIdx = Math.floor(Math.random() * 4);
    const randomImg = imageArr[randomIdx];

    const serverName = server.serverName.length > 16 ? server.serverName.slice(0, 16) + "..." : server.serverName;

    if (!currentUser.serversJoined.includes(server.id)) {
        return (
            <li className="public-server-list-item">
                <div className="left-justify-public-server">
                    <img
                        src={randomImg}
                        className="server-list-rand-icon"
                    />
                    <span className="public-server-server-name">
                        {serverName}
                    </span>
                </div>
                <button 
                    className="join-server-button"
                    onClick={() => createMembership({
                        user_id: currentUser.id,
                        server_id: server.id
                    })
                    .then(() => closeModal())}
                >
                    Join
                </button>
            </li>
    )} else return null;
}

export default ServerListItem;