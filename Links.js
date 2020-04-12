import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
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
                            <Link to="/ViewUnderlings" className="nav-link">
                                View Underlings
                             </Link>   
                        </Item>
                        <Item>
                            <Link to="/RequestReviews" className="nav-link">
                                Request Reviews
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/ReviewRequest" className="nav-link">
                                Review Request
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/OldReviews" className="nav-link">
                                Old Reviews
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links