import React from 'react'
import Title from '../../components/Title'
import Description from '../../components/Description'
import withSeparator from '../../hocs/withSeparator'
import achievements from './model'

const Achievement = () => withSeparator(
  achievements.map((event, i) =>
    <React.Fragment key={i}>
      <div className='container-fluid'>
        <Title centered variant={event.variant} icon={event.icon}>
          { event.title }
        </Title>
        <Description centered>
          { event.description }
        </Description>
      </div>
      <div className='image-container p-0'>
        { event.images }
      </div>
    </React.Fragment>
  )
)

export default Achievement
