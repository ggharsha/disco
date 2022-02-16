import React from "react";

export default class CreateConversation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handles: "",
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.parseHandles = this.parseHandles.bind(this);
    }

    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUser.id)
    }
    
    update() {
        return e => this.setState({ ["handles"]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createConversation({ handles: this.parseHandles(this.state.handles) })
        .then(res => {
            console.log(res.payload.conversation.id)
            this.props.history.push(`/channels/@me/${res.payload.conversation.id}`);
            this.handleChange(res.payload.conversation.id);
            this.props.fetchConversation(res.payload.conversation.id);
        })
        .then(() => this.props.fetchCurrentUser(this.props.currentUser.id))
        .then(() => this.props.closeModal())
        .fail(() => this.setState({ errors: this.props.errors[0] }));
    }
    
    handleChange(conversationId) {
        this.props.fetchConversation(conversationId);
        let conversations = document.getElementsByClassName('link-to-conversation');
        conversations = Array.prototype.slice.call(conversations);
        conversations.map(conversation => {
            if (conversation.classList.contains('selected-conversation')) {
                conversation.classList.remove('selected-conversation');
            }
        });
        conversations[0].classList.add('selected-conversation');
    }

    parseHandles() {
        return this.state.handles.split(", ");
    }

    render() {
        if (!this.props.currentUser) return null;
        return this.props.errors.length ? (
            <div className="create-convo-container">
                <h3>Add users to your conversation</h3>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input 
                        type="text"
                        value={this.state.handles}
                        onChange={this.update()}
                        className="create-convo-input-errors"
                        placeholder="Enter the handles of members here, separated by commas (e.g. Friend#0203, Enemy#0111)"
                    />
                    <button 
                        className="create-convo-button"
                        type="submit"
                    >
                        Create
                    </button>
                </form>
                <p className="placeholder">Enter the handles of members here, separated by commas (e.g. Friend#0203, Enemy#0111)</p>
                <p className="create-convo-errors">{this.props.errors}</p>
            </div>
        ) : (
            <div className="create-convo-container">
                <h3>Add users to your conversation</h3>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        type="text"
                        value={this.state.handles}
                        onChange={this.update()}
                        className="create-convo-input"
                        placeholder="Enter the handles of members here, separated by commas (e.g. Friend#0203, Enemy#0111)"
                    />
                    <button
                        className="create-convo-button"
                        type="submit"
                    >
                        Create
                    </button>
                </form>
                <p className="placeholder">Enter the handles of members here, separated by commas (e.g. Friend#0203, Enemy#0111)</p>
            </div>
        )
    }
}