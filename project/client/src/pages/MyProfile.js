import React, { Component } from "react";
import { loginUserAction } from '../actions/authenticationActions';
import {Redirect} from "react-router-dom";
import {SearchBar} from "../components";
import {getCookie, checkCookie, setCookie} from "../utils/cookies";

class MyProfile extends Component {

   renderData(){

   } 

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
                <h1 id='title'>My Profile</h1>
                <p>My Name: {getCookie('name')}</p>
                <p>My Company: {getCookie('companyName')}</p>
                <p>My email: {getCookie('email')}</p>
                <p>Start Date: {getCookie('startDate')}</p>
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
