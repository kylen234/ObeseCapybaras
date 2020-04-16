// Learn more or give us feedback

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Submit from './pages/Submit';
import SubmitRequest from "./pages/SubmitRequest";
import RequestView from "./pages/RequestView";
import { NavBar } from './components'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path='/submit-requests' component={SubmitRequest} />
                    <Route path='/view-requests' component={RequestView} />
                    <Route path='/submit-view' component={Submit} />
                    { /*
                    <Route path='/create-book' component={CreateBook} />
                    <Route path='/edit-book/:id' component={UpdateBookInfo} />
                    <Route path='/show-book/:id' component={ShowBookDetails} />
                    */}
                </Switch>
            </Router>
        );
    }
}

export default App;