import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ServerNavContainer from './servers/server_nav_container';
import ChannelContainer from './channels/channel_container';
import Splash from "./splash/splash";

const App = () => (
    <div className="App">
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} /> {/* login page */}
            <AuthRoute exact path="/register" component={SignupFormContainer} /> {/* register page */}
            <ProtectedRoute exact path="/app" /> {/* loading page */}
            <ProtectedRoute exact path="/channels/@me/:directMessageId" /> {/* dm show page */}
            <ProtectedRoute exact path="/channels/@me" /> {/* home page */}
            <ProtectedRoute exact path="/channels/:serverId/:channelId" component={ChannelContainer} /> {/* channel within server page */}
            <Route exact path="/" component={Splash} /> {/* splash page */}
        </Switch>
        <ProtectedRoute path="/channels" component={ServerNavContainer} /> {/* server nav bar, setting bar */}
    </div>
);

export default App;