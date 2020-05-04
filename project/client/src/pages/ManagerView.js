// JavaScript source code
import Information from '../components/DummyData';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../components/style.css';
import Button from 'react-bootstrap/button'
import {getCookie} from "../utils/cookies";
import axios from 'axios';
import EvaluationTable from '../pages/ViewEvaluations';
import {loginUserAction} from "../actions/authenticationActions";

class ManagerView extends Component {
    constructor(props) {
        super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = {
            employees: Information,
            id: getCookie('id'),
            companyId: getCookie('companyId'),
            viewingEmployees: false
        }
    }
    renderManagerTable() {
         axios.get(`http://localhost:3000/collection2/getEmployeeByCompany`, {
                params: {
                    id: this.state.id,
                    companyId: this.state.companyId
                }
            })
            .then(response => {
                // If data comes back with a CastError, send error message to client
                console.log(response);
                return response;
            }).then(json => {
                return json;
        });
        return this.state.employees.map((people) => {
            const { firstName, lastName, companyId, positionTitle, employeeId, email } = people //destructuring
            return (
                <tr key={firstName}>
                    <td>
                        <div>{firstName} {lastName}, {positionTitle}</div>
                        <div>{email}</div>
                    </td>
                    <td>
                        <div><Button variant="success" align={"center"} onClick={this.showEvaluations()}>View Evaluations</Button></div>
                    </td>
                </tr>
            )
        })
    }

    showEvaluations() {
        
        const employeeEvaluations = (
        <div>
            <EvaluationTable></EvaluationTable>;
            <Button variant="success" onClick={this.back()}>Back</Button>
        </div>
        );
        return employeeEvaluations;
    }

    renderTableHeader() {
        let header = [ 'EMPLOYEES', 'EVALUATIONS' ];
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    back() {
        this.state.viewingEmployees = false;
        // this.forceUpdate();
    }

    render() {
        if (this.state.viewingEmployees === false) {
            return (
                <div id="root">
                    <h1 id='title'>Your Direct Reports</h1>
                    <table id='evaluations'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderManagerTable()}
                        </tbody>
                    </table>
                </div>
            )
        }
        else {
            return this.showEvaluations();
        }
    }
}

const ProfilePicture = ({ imgSrc, borderColor }) => (
    <img
        style={{
            width: '60px',
            height: '60px',
        }}
        src={imgSrc}
    />
);

export default ManagerView; //exporting a component make it reusable and this is the beauty of react
