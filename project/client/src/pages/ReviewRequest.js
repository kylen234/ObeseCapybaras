// JavaScript source code
import Information from "../components/DummyData";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../components/style.css";
import Button from "react-bootstrap/button";
import { getCookie, setCookie } from "../utils/cookies";
import axios from "axios";
import EvaluationTable from "../pages/ViewEvaluations";
import { loginUserAction } from "../actions/authenticationActions";
import { Redirect } from "react-router";

class ReviewRequest extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      employees: [],
      viewingEmployees: false,
      otherReviews: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/collection2/getEmployeesUnderManager`, {
        params: {
          id: getCookie("id"),
          companyId: getCookie("companyId"),
          employeeId: getCookie("employeeId"),
          managerId: getCookie("managerId"),
        },
      })
      .then((response) => {
        // If data comes back with a CastError, send error message to client
        this.setState({ employees: response.data });
        console.log(response);
        return response;
      })
      .then((json) => {
        return json;
      });
  }

  renderManagerTable() {
    return this.state.employees.map((employee) => {
      const {
        firstName,
        lastName,
        companyId,
        positionTitle,
        employeeId,
        email,
        _id,
      } = employee; //destructuring
      console.log(employee.outgoingReviews);
      return (
        <tr key={firstName}>
          <td>
            <div>
              {firstName} {lastName}, {positionTitle}
            </div>
            <div>{email}</div>
          </td>
          <td>
            <div>
              <Button
                id="employee"
                value={employee}
                variant="success"
                align={"center"}
                onClick={this.acceptRequest}
              >
                Accept
              </Button>
              <br></br>
              <Button
                variant="danger"
                align={"center"}
                //</div>onClick={this.acceptRequest}
              >
                Decline
              </Button>
            </div>
          </td>
        </tr>
      );
    });
  }
  renderEmployeeTable() {
    return this.state.otherReviews.map((employee) => {
      const { email, description, author } = employee; //destructuring
      return (
        <tr key={email}>
          <td>
            <div>{email}</div>
            <div>{author}</div>
          </td>
          <td>
            <div>{description}</div>
          </td>
        </tr>
      );
    });
  }

  acceptRequest = (event) => {
    event.preventDefault();

    let employee = event.target;
    setCookie('viewEmployee', employee, 1000);
    console.log(employee);
  };

  renderTableHeader() {
    let header = ["EMPLOYEES", "REQUESTS"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  back = (event) => {
    // this.setState({viewingEmployees: false});
    // this.forceUpdate();
    event.preventDefault();

    this.setState({ viewingEmployees: false });
    //console.log(this.state.viewingEmployees);
    //let employee = event.target;
    //console.log(employee);
  };

  render() {
    if (this.state.viewingEmployees === false) {
      return (
        <div id="root">
          <h1 id="title">Requests</h1>
          <table id="evaluations">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderManagerTable()}
            </tbody>
          </table>
        </div>
      );
    } else if (this.state.viewingEmployees === true) {
      return (
        <div id="root">
          <Button variant="success" onClick={this.back}>
            Back
          </Button>
          <h1 id="title">Your Direct Reports</h1>
          <table id="evaluations">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderEmployeeTable()}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default ReviewRequest;
