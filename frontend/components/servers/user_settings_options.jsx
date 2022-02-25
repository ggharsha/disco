import React from "react";
import { useRef, useState, useEffect } from "react";

const UserSettingsOptions = ({ user, updateUser, errors }) => {
    const [usernameStatus, setUsernameStatus] = useState(false);
    const [emailStatus, setEmailStatus] = useState(false);
    const [userErrors, setUserErrors] = useState(errors)
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(user.email);
    const modalRef = useRef();

    useEffect(() => {
        const handler = event => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setUsernameStatus(false);
                setEmailStatus(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => document.removeEventListener("mousedown", handler);
    })

    const handleSubmitUsername = e => {
        e.preventDefault();
        updateUser({
            id: user.id,
            email: user.email,
            username: username,
            tag: user.tag,
            password: password
        }).then(() => setUsernameStatus(false))
    }

    const handleSubmitEmail = e => {
        e.preventDefault();
        updateUser({
            id: user.id,
            email: email,
            username: user.username,
            tag: user.tag,
            password: password
        }).then(() => setEmailStatus(false))
    }

    const usernameEdit = (
        <div className="user-settings-modal-background">
            <div className="user-settings-modal-foreground" ref={modalRef}>
                <h3>Change your username</h3>
                <p>Enter a new username and your existing password.</p>
                <form onSubmit={e => handleSubmitUsername(e)}>
                    <input 
                        type="text"
                        value={username} 
                        onChange={e => setUsername(e.currentTarget.value)}
                        className="user-settings-modal-input"
                    />
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                        className="user-settings-modal-input"
                    />
                    <div className="user-settings-modal-bottom">
                        <p className="cancel-user-settings">Cancel</p>
                        <button 
                            className="submit-user-settings"
                            type="submit"
                        >
                            Done
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    const emailEdit = (
        <div className="user-settings-modal-background">
            <div className="user-settings-modal-foreground" ref={modalRef}>
                <h3>Change your email</h3>
                <p>Enter a new email and your existing password.</p>
                <form onSubmit={e => handleSubmitEmail(e)}>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                        className="user-settings-modal-input"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                        className="user-settings-modal-input"
                    />
                    <div className="user-settings-modal-bottom">
                        <p className="cancel-user-settings">Cancel</p>
                        <button
                            className="submit-user-settings"
                            type="submit"
                        >
                            Done
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    return (
        <ul className="user-settings-options">
            <li>
                <span className="user-settings-right">{user.username}</span>
                <span className="user-settings-left" onClick={() => setUsernameStatus(true)}>Edit</span>
            </li>
            {usernameStatus ? usernameEdit : null}
            <li>
                <span className="user-settings-right">{user.email}</span>
                <span className="user-settings-left" onClick={() => setEmailStatus(true)}>Edit</span>
            </li>
            {emailStatus ? emailEdit : null}
        </ul>
    )
}

export default UserSettingsOptions;