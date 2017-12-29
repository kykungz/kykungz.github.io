import React from 'react'
import { Element } from 'react-scroll'

const withScrollSpy = (name) => (...Components) => () => (
  <Element name={name}>
    { [ ...Components ] }
  </Element>
)

export default withScrollSpy
