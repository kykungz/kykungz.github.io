import React from 'react'
import FontAwesome from 'react-fontawesome'

const Credit = () => (
  <p className='text-secondary container content-container text-center text-md-right'>
    <FontAwesome name='code' /> with <FontAwesome name='heart' />
    {' '} by Kongpon Charanwattanakit
    <br />
    <small>Last updated: 11<sup>th</sup> Jan 2018</small>
  </p>
)

export default Credit
