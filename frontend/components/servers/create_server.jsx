import React from "react";

export default class CreateServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            server_name: '',
            public: null,
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUserId);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createServer(this.state)
        .then(server => this.props.history.push(`/channels/${server.server.server.id}/${server.server.server.channels[0]}`))
        .then(() => this.props.closeModal())
        .fail(() => this.setState({ errors: this.props.errors[0] }));
    }

    handleClick(e, string) {
        e.preventDefault();
        let selected = document.getElementsByClassName('selected-form-button');
        if (selected.length) {
            selected = Array.prototype.slice.call(selected);
            selected[0].classList.remove('selected-form-button');
        }
        if (string === 'public') {
            this.setState({ ["public"]: true });
            e.currentTarget.classList.add('selected-form-button');
        } else if (string === 'private') {
            this.setState({ ["public"]: false });
            e.currentTarget.classList.add('selected-form-button');
        };
    }

    render() {
        const serverForm = this.state.errors.length >= 1 ? (
            <form
                className="create-server-form"
                onSubmit={e => this.handleSubmit(e)}
            >
                <div className="left-align-server-form">
                    <label className="all-caps-form field-error">
                        WHO IS THIS FOR? <span>- {this.state.errors}</span>
                    </label>
                </div>

                <button
                    value="Your community"
                    onClick={e => this.handleClick(e, 'public')}
                    className="server-create-button-option error-button"
                ><img
                        className="button-img-server-form"
                        src={window.public}
                    />&nbsp;&nbsp;For a club or a community</button>

                <button
                    value="Just friends"
                    onClick={e => this.handleClick(e, 'private')}
                    className="server-create-button-option error-button"
                ><img
                        className="button-img-server-form"
                        src={window.private}
                    />&nbsp;&nbsp;For me and my friends</button>

                <div className="left-align-server-form">
                    <label className="all-caps-form field-error">
                        SERVER NAME <span>- {this.state.errors}</span>
                    </label>
                </div>
                <input
                    type='text'
                    value={this.state.server_name}
                    onChange={this.update('server_name')}
                    placeholder="Enter a server name"
                    className="enter-a-server-name error-input"
                />
                <div className="nav-links-server-form">
                    <p
                        className="nav-links-server-form-back"
                        onClick={() => this.props.closeModal()}
                    >Back</p>
                    <button
                        type="submit"
                        className="submit-server-form"
                    >
                        Create
                    </button>
                </div>
            </form>
        ) : (
                <form
                    className="create-server-form"
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <div className="left-align-server-form">
                        <label className="all-caps-form">
                            WHO IS THIS FOR?
                        </label>
                    </div>

                    <button
                        value="Your community"
                        onClick={e => this.handleClick(e, 'public')}
                        className="server-create-button-option"
                    ><img
                            className="button-img-server-form"
                            src={window.public}
                        />&nbsp;&nbsp;For a club or a community</button>

                    <button
                        value="Just friends"
                        onClick={e => this.handleClick(e, 'private')}
                        className="server-create-button-option"
                    ><img
                            className="button-img-server-form"
                            src={window.private}
                        />&nbsp;&nbsp;For me and my friends</button>

                    <div className="left-align-server-form">
                        <label className="all-caps-form">
                            SERVER NAME
                        </label>
                    </div>
                    <input
                        type='text'
                        value={this.state.server_name}
                        onChange={this.update('server_name')}
                        placeholder="Enter a server name"
                        className="enter-a-server-name"
                    />
                    <div className="nav-links-server-form">
                        <p
                            className="nav-links-server-form-back"
                            onClick={() => this.props.closeModal()}
                        >Back</p>
                        <button
                            type="submit"
                            className="submit-server-form"
                        >
                            Create
                        </button>
                    </div>
                </form>
        );

        return (
            <div className="create-server-form-container">
                <h3 className="create-server-form-header">Create a server</h3>
                <p className="create-form-subtext">Your server is where you and your friends can hang out. Make yours and start talking.</p>
                {/* <form 
                    className="create-server-form"
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <div className="left-align-server-form">
                        <label className="all-caps-form">
                            WHO IS THIS FOR?
                        </label>
                    </div>

                    <button
                        value="Your community"
                        onClick={e => this.handleClick(e, 'public')}
                        className="server-create-button-option"
                    ><img 
                        className="button-img-server-form"
                        src={window.public}
                    />&nbsp;&nbsp;For a club or a community</button>

                    <button
                        value="Just friends"
                        onClick={e => this.handleClick(e, 'private')}
                        className="server-create-button-option"
                    ><img 
                        className="button-img-server-form"
                        src={window.private}
                    />&nbsp;&nbsp;For me and my friends</button>

                    <div className="left-align-server-form">
                        <label className="all-caps-form">
                            SERVER NAME
                        </label>
                    </div>
                    <input
                        type='text'
                        value={this.state.server_name}
                        onChange={this.update('server_name')}
                        placeholder="Enter a server name"
                        className="enter-a-server-name"
                    />
                    <div className="nav-links-server-form">
                        <p 
                            className="nav-links-server-form-back"
                            onClick={() => this.props.closeModal()}
                        >Back</p>
                        <button 
                            type="submit"
                            className="submit-server-form"
                        >
                        Create
                    </button>
                    </div>
                </form> */}
                {serverForm}
            </div>
        )
    }
}