import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { checkCookie, getCookie } from '../utils/cookies';
import MyProfile from "../pages/MyProfile";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={props => (
        checkCookie() !== null ? (
            <Component { ...props } />
        ) : (
            <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }}
            />
        )
    )} />
);

export default PrivateRoute;