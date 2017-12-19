import React from 'react';
import Title from '../containers/Title'
import Description from '../containers/Description'
import { achievements } from '../assets/data'
import withSeparator from '../hocs/withSeparator'

const Achievement = () => withSeparator(
  achievements.map((event, i) =>
    <React.Fragment key={i}>
      <div className="container-fluid">
        <Title centered variant={ event.variant } icon={ event.icon }>
          { event.title }
        </Title>
        <Description centered>
          { event.description }
        </Description>
      </div>
      <div className="p-0 text-center">
        { event.images }
      </div>
    </React.Fragment>
  )
)

export default Achievement;
