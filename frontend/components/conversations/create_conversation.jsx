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
                <p>{this.props.errors}</p>
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