import React from 'react';
import { Route, Switch } from 'react-router';
import AdminPanel from '../../Pages/Admin/AdminPanel/AdminPanel';
import Home from '../../Pages/Home/Home';

const MyRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/admin" component={AdminPanel}/>
            </Switch>
        </>
    );
};

export default MyRouter;