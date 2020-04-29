import React, { Component } from "react";
import { loginUserAction } from '../actions/authenticationActions';
class MyProfile extends Component {
    render() {
        // console.log(loginUserA);
        return (
            <h1>My Profile</h1>

        );
    }

    getProfile(data) {
        console.log(data);
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
