import React from "react";

export default class UpdateChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.currentChannel.id,
            channel_name: this.props.currentChannel.channelName,
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.deleteChannelButton = this.deleteChannelButton.bind(this);
    }

    update() {
        return e => this.setState({ channel_name: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateChannel(this.state)
        .then(() => this.props.closeModal())
        .fail(() => this.setState({ errors: this.props.errors[0] }));
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteChannel(this.props.currentChannel.id)
        .then(() => this.props.history.push('/channels/@me'))
        .then(() => this.props.closeModal())
        .then(() => this.handleChange())
    }

    handleChange() {
        let servers = document.getElementsByClassName('server-icon');
        servers = Array.prototype.slice.call(servers);
        servers.map(server => {
            if (server.classList.contains('selected-server')) {
                server.classList.remove('selected-server')
            };
        });
        servers[0].classList.add('selected-server');
    }

    deleteChannelButton() {
        return this.props.currentServer.channels.length > 1 ? (
            <button
                className="delete-channel-button"
                onClick={e => this.handleDelete(e)}
            >
                Delete Channel
            </button>
        ) : null;
    }

    render() {
        if (this.props.errors) {
            return (
                <div className="update-channel-container">
                    <h3>Update Channel</h3>
                    <p>{this.props.errors}</p>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input 
                            className="update-channel-input-error"
                            type="text"
                            value={this.state.channel_name}
                            onChange={this.update()}
                        />
                        <button 
                            className="update-channel-button-error"
                            type="submit"
                        >
                            Update Channel
                        </button>
                    </form>
                    {this.deleteChannelButton()}
                </div>
            )
        } else {
            return (
                <div className="update-channel-container">
                    <h3>Update Channel</h3>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input
                            className="update-channel-input"
                            type="text"
                            value={this.state.channel_name}
                            onChange={this.update}
                        />
                        <button
                            className="update-channel-button"
                            type="submit"
                        >
                            Update Channel
                        </button>
                    </form>
                    {this.deleteChannelButton()}
                </div>
            )
        }
    }
}