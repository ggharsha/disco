import React from "react";

export default class Conversation extends React.Component {
    constructor(props) {
        super(props);

        this.handleConversationNav = this.handleConversationNav.bind(this);
    }

    componentDidMount() {
        this.props.fetchConversation(this.props.match.params.directMessageId)
        .then(() => this.props.handleConversationNav);
    }

    componentDidUpdate() {
        this.handleConversationNav();
    }

    handleConversationNav() {
        let convos = document.getElementsByClassName('conversation-list-item');
        convos = Array.prototype.slice.call(convos);

        let preselected = document.getElementsByClassName('selected-conversation');
        preselected = Array.prototype.slice.call(preselected);

        if (preselected.length === 0) {
            convos.forEach(convo => {
                if (convo.id === this.props.match.params.directMessageId) convo.classList.add('selected-conversation');
        })};
    }

    render() {
        if (!this.props.selectedConversation) return null;
        return (
            <div className="conversation-div">
                <div className="conversation-members-header">
                    <p>

                    </p>
                </div>

            </div>
        )
    }
}