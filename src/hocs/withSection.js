import React from 'react'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  margin-top: 40px;
`

const withSection = (Component) => {
  const Section = ({ icon, title, wide }) => (
    <Wrapper>
      <div className='container content-container'>
        <h2>
          <FontAwesome name={icon} />
          <b className='ml-2'>{ title }</b>
        </h2>
      </div>
      <hr className='content-container' />
      <div className={`mx-auto ${wide ? '' : 'content-container'}`}>
        <Component />
      </div>
      <hr className='content-container' />
    </Wrapper>
  )

  Section.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    wide: PropTypes.bool
  }

  return Section
}

export default withSection
