import React from "react";

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.parseDate = this.parseDate.bind(this);
    }

    componentDidMount() {
        this.props.fetchChannel(this.props.channelId);
        this.props.fetchCurrentUser(this.props.currentUser.id);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value } );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createMessage(this.props.channelId, this.state)
        .then(() => this.props.fetchChannel(this.props.channelId));
        this.setState({ body: "" });
    }

    parseDate(date) {

    }

    render() {
        if (!this.props.channelId || !this.props.currentUser) return null
        return (
            <div id="channel-message-container">
                <div className="channel-message-history">
                    <ul className="channel-message-list">
                        {this.props.channelMessages.map(channelMessage => (
                            <li 
                                key={channelMessage.id}
                                className="channel-message"
                            >
                                <span className="message-timestamp">
                                    {channelMessage.createdAt}
                                </span>
                                <span className="message-username">
                                    &nbsp;{this.props.currentUser.username}
                                </span>
                                <span className="message-body">
                                    &nbsp;{channelMessage.body}
                                </span>
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