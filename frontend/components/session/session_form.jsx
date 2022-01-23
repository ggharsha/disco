import React from "react";
import { Link } from "react-router-dom";

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.form;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        return(
            <div id="login-form">
                <h4>Welcome back!</h4>
                <p>We're so excited to see you again!</p>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label className="field" >EMAIL
                        <input 
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label className="field" >PASSWORD
                        <input 
                            type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button type='submit'>Login</button>
                </form>
                <p>Need an account? <Link to={`/register`}>Register</Link></p>
            </div>
        )
    }
}