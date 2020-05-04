import evaluations from '../components/evaluations';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import '../components/style.css';

import axios from 'axios';
import {getCookie} from "../utils/cookies";

class EvaluationTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: getCookie('id'),
            companyId: getCookie('companyId'),
            evaluations: []
        };
        // let id = "5e77804b4eadaea2ec995ae0";
        // if(getCookie('id') !== undefined || getCookie('id') !== "") id = getCookie('id');
        // axios.get(`http://localhost:3000/collection2/getEmployee/` + id)
        //     .then(response => {
        //         // If data comes back with a CastError, send error message to client
        //         console.log(response.data.personalReviews);
        //         this.setState({evaluations: response.data.personalReviews})
        //         return response;
        //     })
        //     .catch(response => {
        //         console.log(response);
        //     });
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/collection2/getEmployee/` + this.state.id)
            .then(response => {
                // If data comes back with a CastError, send error message to client
                console.log(response.data.personalReviews);
                this.setState({evaluations: response.data.personalReviews})
                return response;
            })
            .catch(response => {
                console.log(response);
            });
    }

    renderTableData() {
        return this.state.evaluations.map((evaluation) => {
            const { _id, author, description, timestamp } = evaluation //destructuring
            return (
                <tr key={_id}>
                    <td>{author}</td>
                    <td>{description}</td>
                    <td>{timestamp}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = ["from", "evaluation", "date"]
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