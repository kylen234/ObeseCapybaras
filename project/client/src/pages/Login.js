import React, { Component } from "react";
import MyProfile from "./MyProfile";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { loginUserAction } from '../actions/authenticationActions';
import {checkCookie, setCookie} from '../utils/cookies';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            employee: {},
            errors: {},
            isSuccess: false,
            message: ''
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
    };

    componentDidMount() {
        document.title = 'React Login';
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.response.login.hasOwnProperty('response')) {
            if (nextProps.response.login.response.data.success !== prevState.isSuccess) {
                setCookie('token', nextProps.response.login.response.data.token, 1);
                setCookie('id', nextProps.response.login.response.data._id, 1);
                setCookie('companyId', nextProps.response.login.response.data.companyId, 100);
                return {
                    isSuccess: nextProps.response.login.response.data.success,
                    message: "SUCCESS"
                };
            } else {
                return {
                    isSuccess: false,
                    message: "FAILURE"
                };
            }
        } else {
            return null;
        }
    }

    render() {
        console.log(this.state.isSuccess);


        if(this.state.isSuccess) {
            return <Redirect to='./MyProfile'/>;
        }

        return (
            <div className="container">
                <Link to='/'/>
                {(checkCookie() !== null) ? <Redirect to='/MyProfile' /> : <Redirect to='/'/>}
                {(!this.props.isSuccess) ? <div className='error'>{this.props.messages}</div> : null}
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
