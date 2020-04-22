// Learn more or give us feedback

import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Submit, RequestReviews} from './pages';
import { NavBar, SideNav } from './components'

import 'bootstrap/dist/css/bootstrap.min.css'

const Wrapper = styled.div`
  margin-left: 12em;
  margin-right: 1em;
`;

class App extends Component {
    render() {
        return (
            <Router>
                <SideNav />
                <Wrapper>
                <Switch>
                    <Route exact path='/' component={RequestReviews} />
                    <Route path='/submit-view' component={Submit} />
                    { /*
                    <Route path='/create-book' component={CreateBook} />
                    <Route path='/edit-book/:id' component={UpdateBookInfo} />
                    <Route path='/show-book/:id' component={ShowBookDetails} />
                    */}
                </Switch>
                </Wrapper>
            </Router>
        );
    }
}

export default App;