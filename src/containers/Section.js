import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const Title = styled.h1`
  @media (max-width: 575px) {
    font-size: 2em;
  }
`

const Section = ({ children, icon, title, wide }) => (
  <div>
    <div className="container content-container mx-auto">
      <Title>
        <FontAwesome name={ icon } />
        <b className="ml-2">{ title }</b>
      </Title>
    </div>
    <hr className="content-container mx-auto"/>
    <div className={ wide ? null : 'content-container mx-auto' }>
      { children }
    </div>
    <hr className="content-container mx-auto"/>
  </div>
)

export default Section;
