import React from "react";

export default class CreateConversation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handles: "",
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update() {
        return e => this.setState({ ["handles"]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    parseHandles() {
        return this.state.handles.split(",");
    }

    render() {
        return (
            <div className="create-convo-container">
                <h3>Add users to your conversation</h3>
            </div>
        )
    }
}