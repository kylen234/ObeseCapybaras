import React from 'react';
import styled from 'styled-components'
import Logo from './Logo'
import Links from './Links'

const StyledSideNav = styled.div.attrs({
  className: 'navbar-dark'
})`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 195px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  background-color: #50c878; 
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

class SideNav extends React.Component{
  render(){
    return(
      <StyledSideNav>
        <Logo />
        <Links />
      </StyledSideNav>
    );
  }
}
export default class Sidebar extends React.Component {
  render() {
    return (
      <SideNav></SideNav>
    );
  }
}