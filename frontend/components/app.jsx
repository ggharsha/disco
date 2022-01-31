import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ServerNavContainer from './servers/server_nav_container';
import ChannelContainer from './channels/channel_container';
import MeContainer from './me/me_container';
import Modal from './modal/modal';
import Splash from "./splash/splash";

const App = ({ cableApp }) => (
    <div className="App">
        <Modal />
        <Switch>
            <AuthRoute 
                exact path="/login" 
                component={LoginFormContainer} 
            />
            <AuthRoute 
                exact path="/register" 
                component={SignupFormContainer} 
            />
            <ProtectedRoute exact path="/app" /> {/* loading page */}
            <ProtectedRoute exact path="/channels/@me/:directMessageId" /> {/* dm show page */}
            <ProtectedRoute 
                exact path="/channels/@me" 
                component={MeContainer}
            />
            <ProtectedRoute 
                exact path="/channels/:serverId/:channelId" 
                component={ChannelContainer} 
                cableApp={cableApp}
            />
            <Route 
                exact path="/" 
                component={Splash} 
            /> 
        </Switch>
        <ProtectedRoute 
            path="/channels" 
            component={ServerNavContainer} 
        />
    </div>
);

export default App;