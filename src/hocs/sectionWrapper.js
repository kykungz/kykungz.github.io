import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const Title = styled.h1`
  @media (max-width: 575px) {
    font-size: 2em;
  }
`

const sectionWrapper = (Component) => ({ icon, title, wide }) => (
  <div>
    <div className="container content-container">
      <Title>
        <FontAwesome name={ icon } />
        <b className="ml-2">{ title }</b>
      </Title>
    </div>
    <hr className="content-container"/>
    <div className={`mx-auto ${wide ? null : 'content-container'}`}>
      <Component />
    </div>
    <hr className="content-container"/>
  </div>
)

export default sectionWrapper;
