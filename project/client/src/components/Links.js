import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Login} from "../pages";

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``;

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})`
margin-left: 1em;
`;

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``;

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" style={{ color:'white'}} className="navbar-brand">
                    CapyVal
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/MyProfile" style={{color: '#FFF'}} className="nav-link">
                                My Profile
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/ManagerView" style={{color: '#FFF'}} className="nav-link">
                                View Direct Reports
                             </Link>   
                        </Item>
                        <Item>
                            <Link to="/RequestEvaluations" style={{color: '#FFF'}} className="nav-link">
                                Request Evaluations
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/ReviewRequest" style={{color: '#FFF'}} className="nav-link">
                                Review Evaluations
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/ViewEvaluations"style={{color: '#FFF'}} className="nav-link">
                                View Your Evaluations
                            </Link>
                        </Item>
                        <Item>
                            <Link to='/logout' style={{color: '#FFF'}} className="Logout">
                                Logout
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links