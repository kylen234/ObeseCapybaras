// Learn more or give us feedback

import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import {Submit, RequestEvaluations, MyProfile, ReviewRequest, ViewEvaluations, ManagerView, Login} from './pages';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { NavBar, SideNav, LogoutComponent } from './components'
import PrivateRoute from './container/privateRoute'

import 'bootstrap/dist/css/bootstrap.min.css'

const Wrapper = styled.div`
  margin-left: 200px;
  margin-right: 1em;
`;

const Main = withRouter(({ location }) => {
    return (
        <div>
            {
            location.pathname !== '/' && <SideNav/>
            }
        <Route exact path="/" component={Login} />
            <Wrapper>
                <Switch>
                    <PrivateRoute path='/submit-view' component={Submit} />
                    <PrivateRoute path='/RequestEvaluations' component={RequestEvaluations} />
                    <PrivateRoute path='/ReviewRequest' component={ReviewRequest} />
                    <PrivateRoute path='/ViewEvaluations' component={ViewEvaluations} />
                    <PrivateRoute path='/ManagerView' component={ManagerView} />
                    <PrivateRoute path='/MyProfile' component={MyProfile} />

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
                    <Main/>
                </Router>
            </Provider>
        )
    }
}



export default App;

/*
<PrivateRoute path='/logout' component={LogoutComponent} />
 */