// Learn more or give us feedback

import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Submit, RequestEvaluations, OldEvaluations, MyProfile, ViewUnderlings, ReviewRequest} from './pages';
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
                    <Route path='/OldEvaluations' component={OldEvaluations} />
                    <Route path='/ViewUnderlings' component={ViewUnderlings} />
                    <Route path='/RequestEvaluations' component={RequestEvaluations} />
                    <Route path='/ReviewRequest' component={ReviewRequest} />
                </Switch>
                </Wrapper>
            </Router>
        );
    }
}

export default App;

