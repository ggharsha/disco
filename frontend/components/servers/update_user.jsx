import React from "react";

export default class UpdateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: `${this.props.currentUser.id}`,
            email: `${this.props.currentUser.email}`,
            username: `${this.props.currentUser.username}`,
            tag: `${this.props.currentUser.tag}`,
            password: ``
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUser.id);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state);
        // this.props.fetchCurrentUser(this.props.currentUser.id);
    }

    render() {
        const { 
            currentUser, 
            updateUser, 
            deleteUser, 
            logout, 
            closeModal 
        } = this.props;
        if (!currentUser) return null;
        return (
            <div id="user-settings-container">
                <div id="user-settings-left">
                    <ul className="user-settings-nav-bar">
                        <li className="user-settings-header">USER SETTINGS</li>
                        <li
                            className="my-account"
                        >
                            My Account
                        </li>
                        <li 
                            className="logout"
                            onClick={() => logout()}
                        >
                            Log Out
                        </li>
                    </ul>
                </div>
                <div id="user-settings-right">
                    <p 
                        onClick={() => closeModal()}
                        className="close-modal-x"
                    >
                        &times;
                    </p>
                    <div id="user-settings-form-container">
                        <p className="my-account-header">My Account</p>
                        <form 
                            onSubmit={(e) => this.handleSubmit(e)}
                            className="update-user-form"
                        >
                            <img
                                src={currentUser.photoUrl}
                                className="settings-avatar"
                            />
                            <label>USERNAME</label>
                            <input 
                                type='text'
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                            <label>TAG</label>
                            <input
                                type='text'
                                value={this.state.tag}
                                onChange={this.update('tag')}
                            />
                            <label>EMAIL</label>
                            <input 
                                type='text'
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                            <label>PASSWORD</label>
                            <input 
                                type='password'
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                            <button type="submit">
                                Update
                            </button>
                        </form>
                    </div>
                    <button 
                        onClick={(userId) => deleteUser(userId)}
                        className="delete-account-button"
                    >
                        Delete Account
                    </button> 
                </div>
            </div>
        )
    }
}