import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { getCookie, setCookie } from '../utils/cookies';
import { connect } from 'react-redux';
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";

import {loginUserAction, logoutAction} from '../actions/authenticationActions';

class LogoutComponent extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(logoutAction({id: getCookie('id')}));
    }

    render() {
        setCookie('token',  getCookie('token'), 0);
        setCookie('id', getCookie('id'), 0);
        setCookie('companyId', getCookie('companyId'), 0);
        console.log(getCookie('token'));
        if (getCookie('token') === null || getCookie('token') === '') {
            return <Redirect to={Login}/>;
        }
        return <Redirect to={MyProfile}/>;
    }
}

export default connect()(LogoutComponent);
