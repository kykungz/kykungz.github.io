import React from 'react'
import styled from 'styled-components'
import information from '../data/information'

const cutoff = information.length / 2 + 1

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

const Line = ({ line }) => (
  <div className="clearfix">
    <Left>{ line.title }:</Left>
    <Right>{ line.answer }</Right>
  </div>
)

const Personal = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md">
        { information.slice(0, cutoff).map((line, i) =>
          <Line key={i} line={line} />
        ) }
      </div>
      <div className="col-md">
        { information.slice(cutoff).map((line, i) =>
          <Line key={i} line={line} />
        ) }
      </div>
    </div>
  </div>
)

export default Personal
