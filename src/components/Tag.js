import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Badge = styled.h3`
  background-color: ${props => props.bg};
  color: ${props => props.color};
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`

const Tag = ({ text, variant, bg, color }) => {
  return variant
    ? <Badge className={`badge badge-pill badge-${variant}`}>{ text }</Badge>
    : <Badge color={color} bg={bg} className='badge badge-pill'>{ text }</Badge>
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  bg: PropTypes.string,
  color: PropTypes.color
}

export default Tag
