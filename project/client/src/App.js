// Learn more or give us feedback

import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import {Submit, RequestEvaluations, MyProfile, ReviewRequest, ViewEvaluations, ManagerView, Login} from './pages';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { NavBar, SideNav } from './components'
import PrivateRoute from './container/privateRoute'

import 'bootstrap/dist/css/bootstrap.min.css'

const Wrapper = styled.div`
  margin-left: 200px;
  margin-right: 1em;
`;

/*
const store = configureStore();
class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
                {
                    location.pathname !== '/' && <SideNav/>
                }
                <Wrapper>
                    <Route exact path="/" component={Login} />
                <Switch>
                    <Route path='/submit-view' component={Submit} />
                    <Route path='/RequestEvaluations' component={RequestEvaluations} />
                    <Route path='/ReviewRequest' component={ReviewRequest} />
                    <Route path='/ViewEvaluations' component={ViewEvaluations} />
                    <Route path='/ManagerView' component={ManagerView} />
                    <PrivateRoute path='/MyProfile' component={MyProfile} />
                </Switch>
                </Wrapper>
            </Router>
            </Provider>
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
            <Wrapper>
                <Switch>
                    <Route path='/submit-view' component={Submit} />
                    <Route path='/RequestEvaluations' component={RequestEvaluations} />
                    <Route path='/ReviewRequest' component={ReviewRequest} />
                    <Route path='/ViewEvaluations' component={ViewEvaluations} />
                    <Route path='/ManagerView' component={ManagerView} />
                    <Route path='/MyProfile' component={MyProfile} />
                </Switch>
            </Wrapper>
        </div>
    )
});
const store = configureStore();
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Main />
                </Router>
            </Provider>
        )
    }
}



export default App;
