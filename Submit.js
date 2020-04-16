import React, { Component, ReactDOM } from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
//import { Jumbotron } from "../components/Jumbotron";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import bg from "../assets/bg.jpeg";
import { CardImgOverlay } from "react-bootstrap/Card";

const Styles = styled.div`
.jumbo {
    background-color: #696;
    background-size: cover;
    color: #fff;
    height 700px;
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
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Evaluation submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <Styles>
            <Jumbo fluid className="jumbo">
              <div className="overlay"> </div>
              <Container>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <a href="#">RequestReviews</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Submit</BreadcrumbItem>
                </Breadcrumb>
                <h1 align={"center"}>
                  <form onSubmit={this.handleSubmit} align={"center"}>
                    <h2 align={"center"}>
                      <label>
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

                        <textarea 
                          rows="10"
                          placeholder="Your Review..."
                          value={this.state.value}
                          onChange={this.handleChange}
                          align={"center"}
                        ></textarea>
                      </label>
                    </h2>
                    <button type="submit" value="Submit" align={"center"}>
                      Submit
                    </button>
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
