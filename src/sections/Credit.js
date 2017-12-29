import React from 'react'
import FontAwesome from 'react-fontawesome'

const Credit = () => (
  <p className="text-secondary container content-container text-center text-md-right">
    <FontAwesome name="code" /> with <FontAwesome name="heart" />
    {' '} by Kongpon Charanwattanakit
    <br />
    <small>Last updated: 29<sup>th</sup> Dec 2017</small>
  </p>
)

export default Credit
