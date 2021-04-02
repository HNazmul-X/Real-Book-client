import React from 'react';
import { Route, Switch } from 'react-router';
import AdminPanel from '../../Pages/Admin/AdminPanel/AdminPanel';
import CheckOut from '../../Pages/CheckOut/CheckOut';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Order from '../../Pages/Order/Order';
import PrivateRoute from './PrivateRoute';

const MyRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home}/>
                <PrivateRoute exact path="/admin">
                    <AdminPanel/>
                </PrivateRoute>
                <Route exact path="/login" component={Login}/>
                <PrivateRoute exact path="/order">
                    <Order/>
                </PrivateRoute>
                <PrivateRoute exact path="/check-out/:bookId">
                    <CheckOut/>
                </PrivateRoute>
            </Switch>
        </>
    );
};

export default MyRouter;