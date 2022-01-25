import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Splash from "./splash/splash";

const App = () => (
    <div className="App">
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} /> {/* login page */}
            <AuthRoute exact path="/register" component={SignupFormContainer} /> {/* register page */}
            <ProtectedRoute exact path="/app" /> {/* loading page */}
            <ProtectedRoute exact path="/channels/@me/:directMessageId" /> {/* dm show page */}
            <ProtectedRoute exact path="/channels/@me" /> {/* home page */}
            <ProtectedRoute exact path="/channels/:serverId/:channelId" /> {/* channel within server page */}
            <Route exact path="/" component={Splash} /> {/* splash page */}
        </Switch>
        <ProtectedRoute path="/channels" /> {/* server nav bar */}
        <ProtectedRoute path="/channels" /> {/* user settings */}
        <ProtectedRoute path="/channels/@me" /> {/* dm list nav bar */}
    </div>
);

export default App;