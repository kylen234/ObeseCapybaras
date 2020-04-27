// Learn more or give us feedback

import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Submit, RequestEvaluations, MyProfile, ReviewRequest, ViewEvaluations, ManagerView} from './pages';
import { NavBar, SideNav } from './components'

import 'bootstrap/dist/css/bootstrap.min.css'

const Wrapper = styled.div`
  margin-left: 200px;
  margin-right: 1em;
`;

class App extends Component {
    render() {
        return (
            <Router>
                <SideNav />
                <Wrapper>
                <Switch>
                    <Route exact path='/' component={MyProfile} />
                    <Route path='/submit-view' component={Submit} />
                    <Route path='/RequestEvaluations' component={RequestEvaluations} />
                    <Route path='/ReviewRequest' component={ReviewRequest} />
                    <Route path='/ViewEvaluations' component={ViewEvaluations} />
                    <Route path='/ManagerView' component={ManagerView} />
                </Switch>
                </Wrapper>
            </Router>
        );
    }
}


export default App;
