import React, { Component } from 'react';
import axios from 'axios';
import RadioButtonsGroup from "../components/RadioButtonsGroup";
// Make a profile component for your app
class MyProfile extends Component {

    state = {
        employee: {},
        errorMessage: ''
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
                    }
                });
        };

    // If object is empty
    isEmpty = (obj) => {
        for(let key in obj) {
            if(obj.hasOwnProperty(key)) return false;
        }
        return true;
    };


    render(){
        // If there isn't the employee's value, we'll ask the employee ID
        if(this.isEmpty(this.state.employee)) {
            return (
                // Creates a card body
                <div className="card card-body mx-auto my-5 text-center">
                    <h1 align={"center"}>My Profile</h1>
                    <h1>Please enter your Employee ID</h1>
                    <br /><br />
                    <form onSubmit={this.findEmployee} className='row'>
                        {/*<RadioButtonsGroup/>*/}
                        <input id="employeeEmail" className="col-10" placeholder="Email" style={styles.inputBar}/>
                        <input id="employeePassword" className="col-10" placeholder="Password" style={styles.inputBar}/>

                        {/*<input id="employeeIDInput" className="col-8" placeholder="Employee ID" style={styles.inputBar}/>*/}
                        <button className="btn btn-primary align-items-center" type="Submit" style={styles.button}>Submit</button>
                    </form>
                    <div style={styles.errorMessage}>{this.state.errorMessage}</div>
                </div>
            );
        } else {
            return (
                <h1 align={"center"}>My Profile</h1>
            )
        }
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