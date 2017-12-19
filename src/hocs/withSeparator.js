import React from 'react';

const withSeparator = (Components) => (
  <React.Fragment>
    { Components.reduce((prev, curr) =>
      <React.Fragment>{prev} <hr/> {curr}</React.Fragment>
    ) }
  </React.Fragment>
)

export default withSeparator;
