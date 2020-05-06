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
import Submit from "../pages/Submit";

class ReviewRequest extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      acceptingRequest: false,
      requests: [],
      currentRequest: ""
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/collection2/getEmployee/` + getCookie("id"), {
        params: {
          id: getCookie("id"),
        },
      })
      .then((response) => {
        // If data comes back with a CastError, send error message to client
        this.setState({ requests: response.data.yourRequests });
        return response;
      })
      .then((json) => {
        return json;
      });
  }

  renderRequestTable() {
    return this.state.requests.map((employee) => {
      const {
        // firstName,
        // lastName,
        // companyId,
        // positionTitle,
        // employeeId,
        email,
        _id,
        author
      } = employee; //destructuring
      console.log(employee.outgoingReviews);
      return (
        <tr key={_id}>
          <td>
            <div>
              {author}
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
              >
                Decline
              </Button>
            </div>
          </td>
        </tr>
      );
    });
  }

  renderSubmit() {
    // return this.state.otherReviews.map((employee) => {
    //   const { email, description, author } = employee; //destructuring
    //   return (
    //     <tr key={email}>
    //       <td>
    //         <div>{email}</div>
    //         <div>{author}</div>
    //       </td>
    //       <td>
    //         <div>{description}</div>
    //       </td>
    //     </tr>
    //   );
    // });
    return <Submit request={this.state.currentRequest}/>;
  }

  acceptRequest = (event) => {
    event.preventDefault();

    let employee = event.target;
    this.state.currentRequest = Object.values(employee)[1].value;
    this.setState({ acceptingRequest: true });
  };

  renderTableHeader() {
    let header = ["EMPLOYEES", "REQUESTS"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  back = (event) => {

    event.preventDefault();

    this.setState({ acceptingRequest: false });

  };

  render() {
    if (this.state.acceptingRequest === false) {
      return (
        <div id="root">
          <h1 id="title">Requests</h1>
          <table id="evaluations">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderRequestTable()}
            </tbody>
          </table>
        </div>
      );
    } else if (this.state.acceptingRequest === true) {
      return (
        <div id="root">
          <Button variant="success" onClick={this.back}>
            Back
          </Button>
          {this.renderSubmit()}
          {/* <h1 id="title">Your Direct Reports</h1>
          <table id="evaluations">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderSubmit()}
            </tbody>
          </table> */}
        </div>
      );
    }
  }
}

export default ReviewRequest;
