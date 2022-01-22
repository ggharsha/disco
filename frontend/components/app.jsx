import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>Disco</h1>
        </header>
        <Switch>
            <AuthRoute exact path="/login" /> {/* login page */}
            <AuthRoute exact path="/register" /> {/* register page */}
            <ProtectedRoute exact path="/app" /> {/* loading page */}
            <ProtectedRoute exact path="/channels/@me/:directMessageId" /> {/* dm show page */}
            <ProtectedRoute exact path="/channels/@me" /> {/* home page */}
            <ProtectedRoute exact path="/channels/:serverId/:channelId" /> {/* channel within server page */}
            <Route exact path="/" /> {/* splash page */}
        </Switch>
    </div>
);

export default App;