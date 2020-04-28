import React, { Component } from "react";
import axios from "axios";
import MyProfile from "./MyProfile";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            employee: {},
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (!this.isEmpty(this.state.employee)) {
            this.props.history.push("MyProfile");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.isEmpty(this.state.employee)) {
            this.props.history.push("MyProfile");
        }
    }

    // If object is empty
    isEmpty = (obj) => {
        for(let key in obj) {
            if(obj.hasOwnProperty(key)) return false;
        }
        return true;
    };

    findEmployee = (event) => {
        // Prevent submit's default action of page load
        event.preventDefault();

        // Target Input value
        const email = document.getElementById('employeeEmail').value;
        const password = document.getElementById('employeePassword').value;
        // Fetch request for employee information
        axios
            .get(`http://localhost:3000/collection2/getEmail/`+email)
            .then(employeeData => {
                // If data comes back with a CastError, send error message to client
                if (employeeData.data.password !== password) {
                    this.setState({errorMessage: 'Incorrect Password' + employeeData.data.password});
                } else {
                    // Else set state 'employee' to employeeData
                    this.setState({employee: employeeData});
                    this.props.history.push("MyProfile");
                }
            });
    }

    render() {
            return (
                <div className="container">
                    <div style={{marginTop: "4rem"}} className="row">
                        <div className="col s8 offset-s2">
                            <div className="col s12" style={{paddingLeft: "11.250px"}}>
                                <h4>
                                    <b>Login</b> below
                                </h4>
                            </div>
                            <form noValidate onSubmit={this.findEmployee}>
                                <FormGroup controlId="Username" bsSize="large">
                                    <input id="employeeEmail" className="col-10" placeholder="Email" style={styles.inputBar}/>
                                </FormGroup>
                                <FormGroup controlId="password" bsSize="large">
                                    <input id="employeePassword" className="col-10" placeholder="Password" style={styles.inputBar}/>
                                </FormGroup>
                                <Button type="submit">
                                    Login
                                </Button>
                            </form>
                        </div>
                    </div>
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


export default Login;
