import { CardStack, Card, people, SearchBar } from '../components';
import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Checkbox from '../components/Checkbox';
import {getCookie, setCookie} from "../utils/cookies";

class RequestEvaluations extends Component {

    constructor(props) {
        super(props);  //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state ={
            employees: [],
        };
    };

    componentDidMount () {
        axios.get(`http://localhost:3000/collection2/getEmployeeByCompany`, {
            params: {
                id: getCookie('id'),
                companyId: getCookie('companyId'),
            }
        })
        .then(response => {
            // If data comes back with a CastError, send error message to client
            this.setState({employees: response.data});
            return response;
        })
        .catch(response => {
            console.log(response);
        });
        this.selectedCheckboxes = new Set();
    };

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        for (const checkbox of this.selectedCheckboxes) {
            console.log(checkbox, 'is selected.');
        }
    };

    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    );

    renderTableData() {
        return this.state.employees.map((employee) => {
            console.log(employee);
            const { firstName, lastName, positionTitle } = employee; //destructuring
            let name = firstName + " " + lastName;
            return (
                <tr key={name}>
                    <td>
                        {name}, {positionTitle}
                    </td>
                    <td>
                        <form onSubmit={this.handleFormSubmit}>
                            {this.createCheckbox()}
                        </form>
                    </td>
                </tr>
            )
        });

    }

    renderTableHeader() {
        let header = [ 'EMPLOYEES', 'REQUEST EVALUATION' ]
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }


    render() {
        console.log(this.state.employees);
        return (
            <div>
                <h1 id='title'>REQUEST EVALUATION</h1>
                <table id='evaluations'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
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


export default RequestEvaluations;