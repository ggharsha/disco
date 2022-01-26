import React from 'react';
import { logout } from '../../actions/session_actions';
import { updateUser, deleteUser } from '../../actions/users_actions';
import { connect } from 'react-redux';
import SettingsNav from './settings_nav';
import { fetchCurrentUser } from '../../actions/session_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    updateUser: user => dispatch(updateUser(user)),
    deleteUser: userId => dispatch(deleteUser(userId)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId))
});

export default connect(mSTP, mDTP)(SettingsNav);