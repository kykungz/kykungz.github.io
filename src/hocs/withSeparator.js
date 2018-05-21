import React, { Fragment } from 'react'

const withSeparator = (Components) => (
  <Fragment>
    { Components.reduce((prev, curr) =>
      <Fragment>{prev} <hr /> {curr}</Fragment>
    ) }
  </Fragment>
)

export default withSeparator
