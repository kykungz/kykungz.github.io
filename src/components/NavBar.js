import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: white;
  box-shadow: 0 1px 1px -1px gray;
  padding: 0 !important;
`
const NavItem = styled.span`
  cursor: pointer;
  color: black;
  padding: 13px;
  margin: 0;
  font-size: 18px;
  transition: background 200ms;

  &:hover {
    background-color: #f2f2f2;
  }
`
const NavBar = () => (
  <Nav className="navbar navbar-light navbar-expand-lg sticky-top">
    <div className="container">
      <a className="navbar-brand" href="/">
        <FontAwesome name="code" size="lg" />
        <b className="mx-2">
          Kongpon
        </b>
        <FontAwesome name="copyright" size="lg" style={{color: 'orange'}} />
      </a>
      <div className="navbar-nav d-none d-lg-flex">
        <NavItem className="nav-item">
          <FontAwesome name='home' /> Home
        </NavItem>
        <NavItem className="nav-item">
          <FontAwesome name='user-circle-o' /> About
        </NavItem>
        <NavItem className="nav-item">
          <FontAwesome name='star' /> Achievements
        </NavItem>
        <NavItem className="nav-item">
          <FontAwesome name='th' /> Projects
        </NavItem>
        <NavItem className="nav-item">
          <FontAwesome name='send' /> Contact
        </NavItem>
      </div>
    </div>
  </Nav>
)

export default NavBar;
