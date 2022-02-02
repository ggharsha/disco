import React from "react";

export default class CreateChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            channel_name: '',
            errors: [] 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.serverId = null;
    }

    componentDidMount() {
        this.fetchDetails();
        this.props.fetchServer(this.serverId);
    }

    fetchDetails() {
        const url = this.props.history.location.pathname;
        const urlArr = url.split("/");
        this.serverId = parseInt(urlArr[2]);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createChannel(this.state, this.serverId)
        .then(() => this.props.closeModal())
        // .fail(() => this.setState({ errors: this.props.errors[0] }));
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return this.state.errors.length < 1 ? (
            <div className="create-channel-form">
                <h3 className="channel-create-header">
                    Give your channel a name! 
                </h3>
                <form 
                    className="channel-create-form"
                    onSubmit={(e) => this.handleSubmit(e)}
                >
                    <input 
                        type='text'
                        value={this.state.channel_name}
                        onChange={this.update('channel_name')}
                        className="channel-create-input"
                    />
                    <button className="channel-create-button">
                        Create Channel
                    </button>
                </form>
            </div>
        ) : (
            <div className = "create-channel-form" >
                <h3 className="channel-create-header">
                    Give your channel a name!
                </h3>
                <form 
                    className="channel-create-form"
                    onSubmit={(e) => this.handleSubmit(e)}
                >
                    <p className="error-list-channel-create">
                        {this.state.errors}
                    </p>
                    <input 
                        type='text'
                        value={this.state.channel_name}
                        onChange={this.update('channel_name')}
                        className="channel-create-input error-input"
                    />
                    <button className="channel-create-button">
                        Create Channel
                    </button>
                </form>
            </div>
        )
    }
}