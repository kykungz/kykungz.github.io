import React from 'react'
import { Link } from 'react-scroll'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'
import Hamburger from '../../components/Hamburger'

const Nav = styled.nav`
  background-color: white;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  padding: 0 !important;
  transition: all 300ms;
`

const NavItem = styled.span.attrs({
  className: 'nav-item'
})`
  color: black;
  font-size: 18px;
`

const NavbarBrand = styled.a.attrs({
  className: 'navbar-brand'
})`
  margin: 6px 16px;
`

const ScrollLink = styled(Link).attrs({
  activeClass: 'active',
  spy: true,
  smooth: 'easeInOutQuint',
  duration: 800
})`
  cursor: pointer;
  padding: 13px;
  transition: background 200ms;

  &:hover {
    background-color: #f2f2f2;
  }
`

const NavBar = () => (
  <Nav className='navbar navbar-light navbar-expand-lg sticky-top'>
    <div className='container-fluid mx-lg-4'>
      <NavbarBrand href='/'>
        <FontAwesome name='code' size='lg' />
        <b className='mx-2'>
          Kongpon
        </b>
        <FontAwesome name='copyright' size='lg' style={{color: 'orange'}} />
      </NavbarBrand>
      <div className='navbar-nav d-none d-lg-flex'>
        <ScrollLink to='home' offset={-100}>
          <NavItem> <FontAwesome name='home' /> Home </NavItem>
        </ScrollLink>
        <ScrollLink to='about' offset={-80}>
          <NavItem> <FontAwesome name='user-circle-o' /> About </NavItem>
        </ScrollLink>
        <ScrollLink to='achievements' offset={-90}>
          <NavItem> <FontAwesome name='star' /> Achievements </NavItem>
        </ScrollLink>
        <ScrollLink to='projects' offset={-90}>
          <NavItem> <FontAwesome name='th' /> Projects </NavItem>
        </ScrollLink>
        <ScrollLink to='contact' offset={-400}>
          <NavItem> <FontAwesome name='send' /> Contact </NavItem>
        </ScrollLink>
      </div>
      <div className='mr-4 mt-1 d-flex d-lg-none'>
        <Hamburger />
      </div>
    </div>
  </Nav>
)

export default NavBar
