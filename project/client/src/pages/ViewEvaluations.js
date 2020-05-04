import evaluations from '../components/evaluations';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import '../components/style.css';
import axios from "axios";
import {getCookie} from "../utils/cookies";

class EvaluationTable extends Component {
    constructor(props) {
        super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { evaluations };
    }

    componentWillMount() {
        let id = getCookie('id');
        axios.get(`http://localhost:3000/collection2/`+id, {
        })
            .then(response => {
                // If data comes back with a CastError, send error message to client
                this.setState({employees: response.data});
                return response;
            })
            .catch(response => {
                console.log(response);
            });
    }

    renderTableData() {
        return this.state.evaluations.map((evaluations) => {
            const { from, evaluation, date } = evaluations //destructuring
            return (
                <tr key={from}>
                    <td>{from}</td>
                    <td>{evaluation}</td>
                    <td>{date}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.evaluations[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Evaluations of You</h1>
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

export default EvaluationTable; //exporting a component make it reusable and this is the beauty of react