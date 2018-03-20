import React from 'react'
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Header = styled.h2`
  padding: 8px 16px;
  border-radius: 20px;
	text-align: ${props => props.centered ? 'center' : 'left'};

  @media (max-width: 575px) {
    font-size: 1.5em;
  }
`

const Title = ({ centered, children, icon, variant }) => (
  <Header className={ variant ? `badge-${variant}` : 'badge-light' } centered={ centered }>
    { icon && <FontAwesome className="mr-3" name={ icon } /> }
    { children }
  </Header>
)

export default Title;
