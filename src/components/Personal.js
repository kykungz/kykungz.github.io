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

const cutoff = (length) => length / 2 + 1

const Personal = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md">
        { information.slice(0, cutoff(information.length)).map((line, i) =>
          <Line key={i}>
            <Left>{ line.title }:</Left>
            <Right lang={ line.lang }>{ line.answer }</Right>
          </Line>
        ) }
      </div>
      <div className="col-md">
        { information.slice(cutoff(information.length)).map((line, i) =>
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
