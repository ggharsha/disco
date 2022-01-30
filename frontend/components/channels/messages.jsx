import React from "react";

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        };
    }

    componentDidMount() {
        this.props.fetchChannel(this.props.channelId);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value } );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createMessage(this.props.channelId, this.state)
        .then(() => this.props.fetchChannel(this.props.channelId));
    }

    render() {
        if (!this.props.channelId) return null
        return (
            <div id="channel-message-container">
                <div className="channel-message-history">
                    <ul className="channel-message-list">
                        {this.props.channelMessages.map(channelMessage => (
                            <li 
                                key={channelMessage.id}
                                className="channel-message"
                            >
                                <span className="timestamp-message">
                                    {channelMessage.createdAt}
                                </span>
                                {channelMessage.body}
                            </li>
                        ))}
                    </ul>
                </div>
                <form 
                    id="type-message-form"
                    onSubmit={(e) => this.handleSubmit(e)}
                >
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}