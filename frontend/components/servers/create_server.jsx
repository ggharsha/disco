import React from "react";

export default class CreateServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            server_name: '',
            public: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUserId);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createServer(this.state)
        // .then(server => this.props.history.push(`/channels/${server.id}/${server.channels[0].id}`))
    }

    render() {
        return (
            <div className="create-server-form-container">
                <h3 className="create-server-form-header">Create a server</h3>
                <form 
                    className="create-server-form"
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <label className="all-caps-form">
                        WHO IS THIS FOR?
                    </label>
                    <label className="radio-label-form">
                        Your community
                    </label>
                    <input
                        type="radio"
                        name="type"
                        value="true"
                        onChange={this.update("public")}
                    />
                    <label className="radio-label-form">
                        Just friends
                    </label>
                    <input
                        type="radio"
                        name="type"
                        value="false"
                        onChange={this.update("public")}
                    />
                    <label className="all-caps-form">
                        SERVER NAME
                    </label>
                    <input
                        type='text'
                        value={this.state.serverName}
                        onChange={this.update('server_name')}
                        placeholder="Enter a server name"
                    />
                    <button type="submit">
                        Create
                    </button>
                </form>
            </div>
        )
    }
}