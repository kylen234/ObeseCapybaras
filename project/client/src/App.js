// Learn more or give us feedback

import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import {Submit, RequestEvaluations, MyProfile, ReviewRequest, ViewEvaluations, DirectReports, Login} from './pages';
import { NavBar, SideNav } from './components'

import 'bootstrap/dist/css/bootstrap.min.css'

const Wrapper = styled.div`
  margin-left: 200px;
  margin-right: 1em;
`;
/*
class App extends Component {
    render() {
        return (
            <Router>


                <SideNav />
                <Wrapper>
                <Switch>
                    <Route path='/MyProfile' component={MyProfile} />
                    <Route path='/submit-view' component={Submit} />
                    <Route path='/RequestEvaluations' component={RequestEvaluations} />
                    <Route path='/ReviewRequest' component={ReviewRequest} />
                    <Route path='/ViewEvaluations' component={ViewEvaluations} />
                    <Route path='/DirectReports' component={DirectReports} />
                </Switch>
                </Wrapper>
            </Router>
        );
    }
}

 */

const Main = withRouter(({ location }) => {
    return (
        <div>
            {
            location.pathname !== '/' && <SideNav/>
            }
        <Route exact path="/" component={Login} />
        <Route path='/MyProfile' component={MyProfile} />
        <Route path='/submit-view' component={Submit} />
        <Route path='/RequestEvaluations' component={RequestEvaluations} />
        <Route path='/ReviewRequest' component={ReviewRequest} />
        <Route path='/ViewEvaluations' component={ViewEvaluations} />
        <Route path='/DirectReports' component={DirectReports} />
        </div>
    )
});

class App extends Component {
    render() {
        return (
            <Router>
                <Main />
            </Router>
        )
    }
}



export default App;