import React from 'react'
import styled from 'styled-components'
import profile from '../data/profile'
import BaseDescription from '../containers/Description'
import portrait from '../assets/images/portrait.png'

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

const Portrait = styled.img`
  max-width: 260px;
  width: 100%;
  margin: 20px;
`

const Description = BaseDescription.extend`
  padding: 15px;
`

const Profile = () => (
  <Layout className="container content-container flex-md-nowrap">
    <Portrait src={ portrait } alt="portrait" />
    <div className="text-center">
      <h2><b>{ profile.name }</b></h2>
      <h4 className="text-secondary">{ profile.position }</h4>
      <Description centered>
        { profile.info }
      </Description>
    </div>
  </Layout>
)

export default Profile
