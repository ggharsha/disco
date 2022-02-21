import React from "react";
import ServerNavIcon from "./server_nav_icon";
import { Link } from "react-router-dom";
import ServerNavBarList from "./server_nav_bar_list";

export default class ServerNavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUser.id);
    }

    removeConversation() {
        let conversations = document.getElementsByClassName('link-to-conversation');
        conversations = Array.prototype.slice.call(conversations);
        conversations.map(conversation => {
            if (conversation.classList.contains('selected-conversation')) {
                conversation.classList.remove('selected-conversation');
            }
        });
    }

    render() {
        const { 
            servers, 
            fetchServer, 
            fetchServers, 
            openModal,
            fetchChannel,
            history
        } = this.props;

        if ((!this.props.currentUser && servers[0]) || !servers) return null
        return (
            <div>
                <div className="server-div">
                    <ServerNavBarList 
                        servers={servers}
                        fetchServer={fetchServer}
                        fetchChannel={fetchChannel}
                        openModal={openModal}
                        history={history}
                    />
                </div>
                <div id="channel-bg">
                    <div id="dm-line"></div>
                    <div id="own-settings">
                        <div id="own-attributes">
                            <img 
                                id="own-avatar" 
                                src={this.props.currentUser.photoUrl} 
                            />
                            <div id="handle">
                                <p id="own-username">
                                    {this.props.currentUser.username}
                                </p>
                                <p id="own-tag">
                                    #{this.props.currentUser.tag}
                                </p>
                            </div>
                        </div>
                        <div id="own-settings-icons">
                            <div id="own-mic">
                                <i className="fas fa-microphone" />
                            </div>
                            <div id="own-headphones">
                                <i className="fas fa-headphones" />
                            </div>
                            <div id="own-gear">
                                <i 
                                    className="fas fa-cog"
                                    onClick={() => openModal('updateUser')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="backdrop">
                </div>
            </div>
        )
    }
}