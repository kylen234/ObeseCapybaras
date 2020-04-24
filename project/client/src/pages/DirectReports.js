// JavaScript source code
import people from '../components/people';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import '../components/style.css';
import Button from 'react-bootstrap/button'

class DirectReports extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { people };
    }
    renderTableData() {
        return this.state.people.map((people) => {
            const { background, imgSrc, imgBorderColor, name, title, mobileNo, location, role } = people //destructuring
            return (
                <tr key={name}>
                    <td>
                        <ProfilePicture imgSrc={imgSrc}/> {name}, {title}
                    </td>
                    <td>
                        <Button variant="success">View Evaluations</Button>
                    </td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = [ 'EMPLOYEES', 'EVALUATIONS' ]
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Your Direct Reports</h1>
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

export default DirectReports; //exporting a component make it reusable and this is the beauty of react