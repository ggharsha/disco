import React from "react";

export default class Channel extends React.Component {
    componentDidMount() {
        this.props.fetchChannel(this.props.match.params.channelId);
    }

    render() {
        return null;
    }
}