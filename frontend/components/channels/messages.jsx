import React from "react";
import ChannelMessageItem from "./channel_message";

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchCurrentUser(this.props.currentUser.id);
        this.props.fetchChannel(this.props.match.params.channelId)
            .then(() => {
                this.props.cableApp.cable.subscriptions.create({
                    channel: `ChannelsChannel`,
                    id: this.props.match.params.channelId
                },
                {
                    received: msg => {
                        this.props.receiveMessage(msg)
                    }
                })
            });
        this.scrollToBottom();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
            this.props.fetchChannel(this.props.match.params.channelId)
                .then(() => {
                    this.props.cableApp.cable.subscriptions.create({
                        channel: `ChannelsChannel`,
                        id: this.props.match.params.channelId
                    },
                        {
                            received: msg => {
                                this.props.receiveMessage(msg)
                            }
                        })
                });
        }
        this.scrollToBottom();
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value } );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createMessage(this.props.channelId, this.state)
            .then(() => this.setState({ body: "" }))
            .then(() => this.props.fetchChannel(this.props.channelId))
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "auto" });
    }

    render() {
        if (!this.props.channelId || !this.props.currentUser) return null
        return (
            <div id="channel-message-container">
                <div className="channel-message-history">
                    <ul className="channel-message-list">
                        {this.props.channelMessages.map(channelMessage => (
                            <ChannelMessageItem 
                                key={channelMessage.id} 
                                message={channelMessage}
                            />
                            // <li 
                            //     key={channelMessage.id}
                            //     className="channel-message"
                            // >
                            //     <span className="message-timestamp">
                            //         {channelMessage.createdAt.slice(11, 16)}&nbsp;&nbsp;
                            //     </span>
                            //     <span className="message-username">
                            //         {channelMessage.user.username}
                            //     </span>
                            //     <span className="message-body">
                            //         {channelMessage.body}
                            //     </span>
                            // </li>
                            ))}
                        <div style={{ float: "left", clear: "both" }}
                            ref={(el) => { this.messagesEnd = el; }}>
                        </div>
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
                        placeholder={`Message #${this.props.channel.channelName}`}
                    />
                    {this.state.body.length ? <button type="submit">Submit</button> : <button disabled type="submit">Submit</button>}
                </form>
            </div>
        )
    }
}