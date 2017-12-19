import React from 'react';
import Title from '../containers/Title'
import Description from '../containers/Description'
import styled from 'styled-components';
import { achievements } from '../assets/data'
import withSeparator from '../hocs/withSeparator'

const ImageList = styled.div`
  padding: 0 !important;
  text-align: center;
`

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
      <ImageList>
        { event.images }
      </ImageList>
    </React.Fragment>
  )
)

export default Achievement;
