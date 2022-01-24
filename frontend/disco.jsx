import React from "react";
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

// testing these
import { createUser } from './actions/users_actions';
import { login } from './actions/session_actions';
// done testing

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: { 
                users: { [window.currentUser.id]: window.currentUser } 
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    };


    // testing these
    window.getState = store.getState;
    window.createUser = createUser;
    window.login = login;
    // done testing

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});