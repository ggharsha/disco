import React from "react";
import { Link } from "react-router-dom";

export default class RegisterForm extends React.Component {
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
        this.props.createUser(this.state)
    }

    render() {
        return (
            <div id='register-form'>
                <h4>Create an account!</h4>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label className="field" >EMAIL
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label className="field" >USERNAME
                        <input 
                            type='text'
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    <label className="field" >PASSWORD
                        <input
                            type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button type='submit'>Continue</button>
                </form>
                <p>Already have an account? <Link to={`/login`}>Login</Link></p>
            </div>
        )
    }
}