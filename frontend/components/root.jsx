import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import actionCable from 'actioncable';

const cableApp = {};
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    cableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')
} else {
    cableApp.cable = actionCable.createConsumer('wss://disc-o.herokuapp.com/cable')
};

const Root = ({ store }) => (
    <Provider store={store} >
        <HashRouter>
            <App cableApp={cableApp} />
        </HashRouter>
    </Provider>
);

export default Root;