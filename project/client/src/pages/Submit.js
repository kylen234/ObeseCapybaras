import React, { Component, ReactDOM } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

class TextEval extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Evaluation submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <a href="#">RequestView</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Submit
                    </BreadcrumbItem>
                </Breadcrumb>
                <h1 align={"center"}>
            <form
                onSubmit={this.handleSubmit}
                align={"center"}>  
                <h2 align={"center"}>
                <label>
                    <h3 align={"center"}>
                    Evaluation:
                    </h3>
                    
                    <textarea 
                    value={this.state.value}
                    onChange={this.handleChange}
                    align={"center"}>   
                    </textarea>
                </label>
                </h2>
                <button 
                    type="submit"
                    value="Submit"
                    align={"center"}>
                    Submit
                </button>
            </form>
            </h1>
            </div>
        );
    }
}
export default TextEval;