import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import MainLayout from "layouts/MainLayout";
import TopPage from "./views/topPage/TopPage";
import MyTask from "./views/myTask/MyTask";

const Routers: React.FC = () => {
    return (
        < Router >
            <Switch>
                <MainLayout>
                    <Route exact path={ "/top-page" } component={ TopPage } />
                    <Route exact path={ "/my-task" } component={ MyTask } />
                </MainLayout>
            </Switch>
            <Redirect to={ "/top-page" } />
        </ Router>
    )
}

export default Routers
