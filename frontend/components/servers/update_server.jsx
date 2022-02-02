import React from 'react';

export default class UpdateServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentServer;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchServer(this.props.match.params.serverId);
        console.log(this.props.match)
        console.log(this.props.currentServer)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateServer(this.props.state)
        .then(() => this.props.closeModal());
    }

    render() {
        if (!this.props.currentServer) return null;
        return (
            <div className='update-server-modal'>
                <h3 className='update-server-header'>Edit server name</h3>
                <form
                    className='update-server-form'
                    onSubmit={(e) => this.props.updateServer(e)}
                >
                    <input 
                        type='text'
                        value={this.state.serverName}
                        onChange={this.props.update('serverName')}
                        className='update-server-input'
                    />
                    <button 
                        type='submit'
                        className='update-server-button'
                    >Update</button>
                </form>
            </div>
        )
    }
}