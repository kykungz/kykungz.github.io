import React from 'react'
import withName from '../../hocs/withName'
import Description from '../../components/Description'
import profile from './model'

const Info = Description.extend`
  padding: 15px;
`

const Profile = () => <Info centered>{ profile.info }</Info>

export default withName(Profile)
