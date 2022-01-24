import React from "react";
import { Link } from "react-router-dom";

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: this.props.form.email, 
            password: this.props.form.password,
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
        .fail(() => this.setState({ errors: this.props.errors.sessionErrors[0] }));
    }

    handleDemoUser(e) {
        e.preventDefault();
        this.props.login({ email: 'Demo@User.com', password: 'password' });
    }

    render() {
        const emailField = (this.state.errors.length < 1) ? (
            <label className="field" >EMAIL
                <input
                    type='text'
                    value={this.state.email}
                    onChange={this.update('email')}
                />
            </label>
        ) : (
            <label className="field-error" >EMAIL - {this.state.errors}
                <input
                    className='input-error'
                    type='text'
                    value={this.state.email}
                    onChange={this.update('email')}
                />
            </label> 
        );

        const passwordField = (this.state.errors < 1) ? (
            <label className="field" >PASSWORD
                <input
                    type='password'
                    value={this.state.password}
                    onChange={this.update('password')}
                />
            </label>
        ) : (
            <label className="field-error" >PASSWORD - {this.state.errors}
                <input
                    className='input-error'
                    type='password'
                    value={this.state.password}
                    onChange={this.update('password')}
                />
            </label>
        );

        return(
            <div id='form-container'>
                <div id="login-form">
                    <h4>Welcome back!</h4>
                    <p>We're so excited to see you again!</p>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        {emailField}
                        {passwordField}
                        <button type='submit'>Login</button>
                    </form>
                    <p className="bottom">Need an account? <Link to={`/register`}>Register</Link></p>
                    <button onClick={(e) => this.handleDemoUser(e)}>Demo</button>
                </div>
            </div>
        )
    }
}