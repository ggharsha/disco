import React from "react";

export default class DirectMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUser.id);
        this.props.fetchConversation(this.props.conversationId)
            .then(() => {
                this.props.cableApp.cable.subscriptions.create({
                    channel: `ConversationsChannel`,
                    id: this.props.conversationId
                },
                {
                    received: dm => {
                        this.props.receiveDirectMessage(dm)
                    }
                })
            })
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createDm(this.props.conversationId, this.state)
            .then(() => this.setState({ body: "" }))
            .then(() => this.props.fetchConversation(this.props.conversationId))
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "auto" });
    }

    render() {
        if (!this.props.conversationId || !this.props.currentUser) return null;
        return (
            <div id="conversation-message-container">
                <div className="conversation-message-history">
                    <ul className="conversation-message-list">
                        {this.props.directMessages.map(directMessage => (
                            <li
                                key={directMessage.id}
                                className="conversation-message"
                            >
                                <span className="message-timestamp">
                                    {directMessage.createdAt.slice(11, 16)}&nbsp;&nbsp;
                                </span>
                                <span className="message-username">
                                    {directMessage.user.username}
                                </span>
                                <span className="message-body">
                                    {directMessage.body}
                                </span>
                            </li>
                        ))}
                        <div style={{ float: "left", clear: "both" }}
                            ref={(el) => { this.messagesEnd = el; }}>
                        </div>
                    </ul>
                </div>
                <form
                    id="type-dm-form"
                    onSubmit={(e) => this.handleSubmit(e)}
                >
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder={`Send a message`}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}