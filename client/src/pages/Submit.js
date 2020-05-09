import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import {
  Jumbotron as Jumbo,
  Container,
  Form,
  FormControl,
  FormGroup,
  Button,
} from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/logo.png";
import axios from "axios";
import { getCookie, setCookie } from "../utils/cookies";

const Styles = styled.div`
.jumbo {
    background-color: #4CAF50;
    background-size: cover;
    color: #fff;
    postion: relative;
    z-index: -2:

.overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
}
`;

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    console.log("HERE");
    console.log(this.state.request);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Evaluation submitted: " + this.state.value);
    event.preventDefault();

    let target = this.props.request;
    console.log(target.target);
    axios
      .put(
        `/collection2/updateEmployee/` + target.target,
        {
          personalReviews: {
            author: getCookie("id"),
            target: target.target,
            description: this.state.value,
          },
        }
      )
      .then((response) => {
        // If data comes back with a CastError, send error message to client
        console.log(response);
      });
    axios
      .delete(
        `/collection2/deleteRequest/` + getCookie("id"),
        {
          othersRequests: {
            author: getCookie("id"),
            target: target._id,
          },
        }
      )
      .then((response) => {
        // If data comes back with a CastError, send error message to client
        console.log(response);
      });

    // We'll put the info
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <Styles>
            <Jumbo fluid className="jumbo">
              <div className="overlay"> </div>
              <Container>
                <Button variant="danger" href="/ReviewRequest">
                  Back
                </Button>
                <h1 align={"center"}>
                  <form onSubmit={this.handleSubmit} align={"center"}>
                    <h2 align={"center"}>
                      {/*
                        <h3
                          style={{
                            color: "#000",
                            fontWeight: 400,
                            lineHeight: 1.45,
                            fontSize: "40px",
                          }}
                          align={"center"}
                        >
                          Evaluation:
                        </h3>
                        */}
                      <div>
                        <Form>
                          <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Evaluation</Form.Label>
                            <Form.Control
                              as="textarea"
                              placeholder="Your Review..."
                              rows="10"
                              value={this.state.value}
                              onChange={this.handleChange}
                            />
                          </Form.Group>
                        </Form>
                        {/*
                          <textarea
                              rows={10}
                              cols={30}
                              placeholder="Your Review..."
                              value={this.state.value}
                              onChange={this.handleChange}
                              align={"center"}
                          />
                          */}
                      </div>
                    </h2>
                    <Button
                      variant="primary"
                      type="submit"
                      value="Submit"
                      bsSize="small"
                      onClick={this.handleSubmit}
                    >
                      Submit
                    </Button>
                  </form>
                </h1>
              </Container>
            </Jumbo>
          </Styles>
        </React.Fragment>
      </div>
    );
  }
}
export default Submit;
