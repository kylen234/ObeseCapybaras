import React, { Component } from "react";
import MyProfile from "./MyProfile";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { loginUserAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            employee: {},
            errors: {},
            isSuccess: false
        };
    }

    onHandleLogin = (event) => {
        event.preventDefault();

        let email = event.target.email.value;
        let password = event.target.password.value;

        const data = {
            email, password
        };

        this.props.dispatch(loginUserAction(data));
        /*
        axios
            .post(`http://localhost:3000/collection2/login`, data)
            .then(response => {
                // If data comes back with a CastError, send error message to client
                // console.log(response.data.success);
                if(response.data.success) {
                    this.props.history.push('MyProfile');
                }
            }).then(json => {
            return json;
        });
         */
    };

    componentDidMount() {
        document.title = 'React Login';
    }


    // If object is empty
    isEmpty = (obj) => {
        for(let key in obj) {
            if(obj.hasOwnProperty(key)) return false;
        }
        return true;
    };

    render() {
        let message;

        if (this.props.response.login.hasOwnProperty('response')) {
            this.state.isSuccess = this.props.response.login.response.data.success;
            message = this.props.response.login.response.message;

            if (this.state.isSuccess) {
                setCookie('token', this.props.response.login.response.token, 1);
            }
        }

        if(this.state.isSuccess) {
            return <Redirect to='./MyProfile'/>;
        }
        return (

            <div className="container">
                <div style={{marginTop: "4rem"}} className="row">
                    <div className="col s8 offset-s2">
                        <div className="col s12" style={{paddingLeft: "11.250px"}}>
                            <h4>
                                <b>Login</b> below
                            </h4>
                        </div>
                        <form noValidate onSubmit={this.onHandleLogin}>
                            <FormGroup controlId="Username" bsSize="large">
                                <input type="email" name="email" id="email" className="col-10" placeholder="Email" style={styles.inputBar}/>
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <input type="password" name="password" id="password" className="col-10" placeholder="Password" style={styles.inputBar}/>
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

const mapStateToProps = (response) => ({response});
export default connect(mapStateToProps)(Login);
// export default Login;
