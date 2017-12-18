import React from 'react';
import styled from 'styled-components'
import { information } from '../assets/data'

const Line = styled.div`
  clear: both;
`

const Info = styled.span`
  font-size: 20px;
`

const Left = Info.withComponent('b').extend`
  float: left;
`

const Right = Info.extend`
  float: right;
  text-align: right;
`

const Personal = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md">
        { information.info.slice(0, 5).map((line, i) =>
          <Line key={i}>
            <Left>{ line.title }:</Left>
            <Right>{ line.answer }</Right>
          </Line>
        ) }
      </div>
      <div className="col-md">
        { information.info.slice(5).map((line, i) =>
            <Line key={i}>
              <Left>{ line.title }:</Left>
              <Right>{ line.answer }</Right>
            </Line>
        ) }
      </div>
    </div>
  </div>
)

export default Personal;
