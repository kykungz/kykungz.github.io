import React from 'react'
import profile from '../data/profile'
import withName from '../hocs/withName'
import Description from '../components/Description'

const Info = Description.extend`
  padding: 15px;
`

const Profile = () => <Info centered>{ profile.info }</Info>

export default withName(Profile)
