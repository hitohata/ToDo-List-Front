import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import MainLayout from "layouts/MainLayout";


const Routers: React.FC = () => {
    return (
        < Router >
            <Switch>
                <MainLayout>
                    <Route exact path={ "/top-page" } />
                </MainLayout>
            </Switch>
            <Redirect to={ "/top-page" } />
        </ Router>
    )
}

export default Routers
