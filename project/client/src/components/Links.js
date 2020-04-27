import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})`
margin-left: 1em;
`

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

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
                            <Link to="/" className="nav-link">
                                My Profile
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/DirectReports" className="nav-link">
                                View Direct Reports
                             </Link>   
                        </Item>
                        <Item>
                            <Link to="/RequestEvaluations" className="nav-link">
                                Request Evaluations
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/ReviewRequest" className="nav-link">
                                Review Request
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/ViewEvaluations" className="nav-link">
                                View Your Evaluations
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links