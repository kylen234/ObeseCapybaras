import React, { Component } from "react";
import { loginUserAction } from '../actions/authenticationActions';
import {Redirect} from "react-router-dom";
import {getCookie, checkCookie, setCookie} from "../utils/cookies";

class MyProfile extends Component {

    render() {
        console.log(getCookie('token'));
        console.log(getCookie('id'));
        console.log(getCookie('companyID'));
        console.log(getCookie('companyName'));
        console.log(getCookie('employeeId'));
        console.log(getCookie('email'));
        console.log(getCookie('name'));
        console.log(getCookie('startDate'));
        console.log(getCookie('outgoingReviews'));
        console.log(getCookie('personalReviews'));

        return (
            <div>
                <h1>My Profile</h1>
            </div>
        );
    }
}
const styles = {
    inputBar: {
        margin: "auto",
        width: "75%",
        border: 0,
        outline: 0,
        background: "transparent",
        borderBottom: "1px solid black"
    },
    button: {
        margin: 30
    },
    errorMessage: {
        color: 'red',
        fontSize: 13,
        textAlign: 'right',
        paddingTop: 10
    }
};


export default MyProfile;
