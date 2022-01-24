import React from "react";
import { Link } from "react-router-dom";

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: this.props.form.password,
            username: this.props.form.username, 
            password: this.props.form.password, 
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
        .fail(() => this.setState({ errors: this.props.errors[0] }));
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

        const usernameField = (this.state.errors < 1) ? (
            <label className="field" >USERNAME
                <input
                    type='text'
                    value={this.state.username}
                    onChange={this.update('username')}
                />
            </label>
        ) : (
                <label className="field-error" >USERNAME - {this.state.errors}
                    <input
                        className='input-error'
                        type='text'
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                </label>
        )

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

        return (
            <div id='form-container'>
                <div id='register-form'>
                    <h4>Create an account</h4>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        {emailField}
                        {usernameField}
                        {passwordField}
                        <button type='submit'>Continue</button>
                    </form>
                    <p className="bottom">Already have an account? <Link to={`/login`}>Login</Link></p>
                </div>
            </div>
        )
    }
}