import React from "react";

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.message;
    }

    componentDidMount() {
        this.props.fetchChannel(this.props.channelId);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div id="channel-message-container">

                <form id="type-message-form">
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                    />
                </form>
            </div>
        )
    }
}