import React, { Component, ReactDOM } from 'react';
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
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Evaluation:
                    <textarea
                        value={this.state.value}
                        onChange={this.handleChange}>
				  </textarea>
                </label>
                <button type="submit" value="Submit">Submit Evaluation
                </button>
            </form>
        );
    }
}
export default TextEval;