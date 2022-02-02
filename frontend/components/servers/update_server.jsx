import React from 'react';

export default class UpdateServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.currentServer.id,
            server_name: this.props.currentServer.serverName,
            public: this.props.currentServer.public
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.serverId = null;
    }

    componentDidMount() {
        this.fetchDetails();
        this.props.fetchServer(this.serverId);
    }

    fetchDetails() {
        const url = this.props.history.location.pathname;
        const urlArr = url.split("/");
        this.serverId = parseInt(urlArr[2]);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateServer(this.state)
        .then(() => this.props.closeModal());
    }

    render() {
        if (!this.props.currentServer) return null;
        return (
            <div className='update-server-modal'>
                <h3 className='update-server-header'>Edit your server name</h3>
                <form
                    className='update-server-form'
                    onSubmit={(e) => this.handleSubmit(e)}
                >
                    <input 
                        type='text'
                        value={this.state.server_name}
                        onChange={this.update('server_name')}
                        className='update-server-input'
                    />
                    <button 
                        type='submit'
                        className='update-server-button'
                    >
                        Update
                    </button>
                </form>
                <button 
                    className='delete-server-button'
                    onClick={
                        () => this.props.deleteServer(this.serverId)
                        .then(() => this.props.closeModal())
                        .then(() => this.props.history.push('/channels/@me'))
                    }
                >
                        Delete Server
                </button>
            </div>
        )
    }
}