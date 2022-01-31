import React from "react";

export default class CreateServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            server: {
                ownerId: this.props.currentUserId,
                serverName: '',
                public: true
            }, errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUserId);
    }

    update(field) {
        return e => this.setState({ server: { [field]: e.currentTarget.value } });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createServer(this.state.server)
            .then(server => this.props.createChannel({ 
                channelName: 'general',
                serverId: server.id
            }));
    }

    render() {
        return (
            <div className="create-server-form-container">
                <h3 className="create-server-form-header">Create a server</h3>
                <form 
                    className="create-server-form"
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <input
                        type='text'
                        value={this.state.server.serverName}
                        onChange={this.update('serverName')}
                        placeholder="Enter a server name!"
                    />
                    <button type="submit">
                        Create
                    </button>
                </form>
            </div>
        )
    }
}