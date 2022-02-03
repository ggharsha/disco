import React from "react";

export default class LeaveServer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUser.id)
        .then(() => this.props.fetchServer(this.parseServerId()))
    }

    parseServerId() {
        const url = this.props.history.location.pathname;
        const urlArr = url.split("/");
        return parseInt(urlArr[2]);
    }

    handleClick() {
        this.props.deleteMembership({
            user_id: this.props.currentUser.id,
            server_id: this.props.currentServer.id
        })
        .then(() => this.props.closeModal())
        .then(() => this.props.history.push('/channels/@me'))
        .then(() => this.props.fetchCurrentUser(this.props.currentUser.id))
    }

    render() {
        if (!this.props.currentServer || !this.props.currentUser) return null;
        return (
            <div className="leave-server-modal">
                <button 
                    className="leave-server-button"
                    onClick={() => this.handleClick()}
                >
                    Leave Server
                </button>
            </div>
        )
    }
}