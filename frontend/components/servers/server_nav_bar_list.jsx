import React from 'react';

const ServerNavBarList = ({ servers, fetchServer, fetchChannel }) => {
    const [currentServer, setCurrentServer] = useState(null);

    const checkDefaultChannel = server => (
        server.channels[0]
    )

    const handleClick = server => {
        setCurrentServer(server.id);
        fetchServer(server.id)
        .then(() => fetchChannel(checkDefaultChannel(server)));
    };

    const handleMeClick = () => {
        setCurrentServer(null);
    };

    return (
        null
    );
};

export default ServerNavBarList;