import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/images/header-blur.png';

const Jumbotron = styled.div`
  background-image: url(${backgroundImg});
  background-size: 100% 100%;
`

const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`

const Name = styled.h1`
  font-size: 4em;

  @media (max-width: 575px) {
    font-size: 3em;
  }
`

const Header = () => (
  <Jumbotron className="jumbotron">
    <Title className="container">
      <Name><b>Kongpon C.</b></Name>
      <h4>Software Developer</h4>
    </Title>
  </Jumbotron>
)

export default Header;
