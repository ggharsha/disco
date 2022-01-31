import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import actionCable from 'actioncable';

const cableApp = {};
cableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable');

const Root = ({ store }) => (
    <Provider store={store} >
        <HashRouter>
            <App cableApp={cableApp} />
        </HashRouter>
    </Provider>
);

export default Root;