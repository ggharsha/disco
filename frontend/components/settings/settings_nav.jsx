import React from "react";

export default class SettingsNav extends React.Component {
    // componentDidMount() {
    //     this.props.fetchCurrentUser(this.props.currentUser.id);
    // }

    render() {
        console.log(this.props.currentUser)
        if (!this.props.currentUser) return null;
        return (
            <div id="own-settings">
                <img id="own-avatar" src={this.props.currentUser.photoUrl} />
                <div id="handle">
                    <p id="own-username">{this.props.currentUser.username}</p>
                    <p id="own-tag">#{this.props.currentUser.tag}</p>
                </div>
                <div id="own-mic">
                    <i className="fas fa-microphone" />
                </div>
                <div id="own-headphones">
                    <i className="fas fa-headphones" />
                </div>
                <div id="own-gear">
                    <i className="fas fa-cog" />
                </div>
            </div>
        );
    }
}