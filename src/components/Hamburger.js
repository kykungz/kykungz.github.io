import React, { Component, Fragment } from 'react'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const ToggleButton = styled.span`
  cursor: pointer;
  z-index: 1000;
`

const HamburgerMenu = styled.div`
  position: fixed;
  padding-top: 52px;
  right: 0;
  top: 0;
  height: 120%;
  width: ${props => props.isOpen ? '240px' : '0'};
  background-color: white;
  box-shadow: -1px 2px 1px rgba(0, 0, 0, 0.2);
  transition: all 400ms;
`

const ScrollLink = styled(Link).attrs({
  smooth: 'easeInOutQuint',
  duration: 800
})`
  cursor: pointer;
  display: block;
  padding: 10px 28px;
  font-size: 1.3em;
  overflow: hidden;
  white-space: nowrap;
  word-wrap: break-word;
  transition: background 200ms;

  &:hover {
    background-color: #f2f2f2;
  }
`

const HamburgerMenuList = () => (
  <div>
    <ScrollLink to='home' offset={-100}>
      <FontAwesome name='home' /> Home
    </ScrollLink>
    <ScrollLink to='about' offset={-80}>
      <FontAwesome name='user-circle-o' /> About
    </ScrollLink>
    <ScrollLink to='achievements' offset={-90}>
      <FontAwesome name='star' /> Achievements
    </ScrollLink>
    <ScrollLink to='projects' offset={-90}>
      <FontAwesome name='th' /> Projects
    </ScrollLink>
    <ScrollLink to='contact' offset={-400}>
      <FontAwesome name='send' /> Contact
    </ScrollLink>
  </div>
)

class Hamburger extends Component {
  state = {
    isOpen: false
  }

  componentDidMount () {
    document.getElementById('App').addEventListener('click', (e) => {
      if (this.state.isOpen && e.target.id !== 'toggle') {
        this.toggleHamburger()
      }
    })
  }

  toggleHamburger = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
  }

  render () {
    return (
      <Fragment>
        <ToggleButton onClick={this.toggleHamburger}>
          <FontAwesome
            id='toggle'
            style={{color: '#4f4f4f'}}
            size='2x'
            name={this.state.isOpen ? 'close' : 'bars'}
          />
        </ToggleButton>
        <HamburgerMenu isOpen={this.state.isOpen}>
          <HamburgerMenuList />
        </HamburgerMenu>
      </Fragment>
    )
  }
}

export default Hamburger
