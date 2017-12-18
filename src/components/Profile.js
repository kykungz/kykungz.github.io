import React from 'react';
import styled from 'styled-components';
import Description from '../containers/Description';
import portrait from '../assets/images/portrait.png';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Portrait = styled.img`
  max-width: 260px;
  width: 100%;
  margin: 20px;
`

const description = (
  <span>
    Hi, my name is <b>Jacky</b>.
    I am currently a Software Engineering student at Kasetsart University.
    I was fascinated by the art of programming, which brought me into this challenging field.
    I'm also looking for an internship at a software development company.
    If you are interested, feel free to contact!
  </span>
)


const Profile = () => (
  <Layout className="container content-container flex-md-nowrap">
    <Portrait src={ portrait } alt="portrait" />
    <div className="text-center">
      <h2><b>Kongpon Charanwattanakit</b></h2>
      <h4 className="text-secondary">Software Developer</h4>
      <Description centered>{ description }</Description>
    </div>
  </Layout>
)

export default Profile;
