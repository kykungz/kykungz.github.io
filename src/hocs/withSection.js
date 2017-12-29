import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const Section = styled.div`
  margin-top: 40px;
`

const withSection = (Component) => ({ icon, title, wide }) => (
  <Section>
    <div className="container content-container">
      <h2>
        <FontAwesome name={ icon } />
        <b className="ml-2">{ title }</b>
      </h2>
    </div>
    <hr className="content-container"/>
    <div className={`mx-auto ${wide ? null : 'content-container'}`}>
      <Component />
    </div>
    <hr className="content-container"/>
  </Section>
)

export default withSection;
