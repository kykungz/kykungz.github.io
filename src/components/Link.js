import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ title, href }) => (
  <a rel='noopener noreferrer' target='_blank' href={href}>
    {title} <i className='fa fa-external-link mr-3' />
  </a>
)

Link.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default Link
