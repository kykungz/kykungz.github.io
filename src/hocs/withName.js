import React from 'react'
import styled from 'styled-components'
import profile from '../sections/Profile/model'
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

const withName = (Component) => () => (
  <Layout className='container content-container flex-md-nowrap'>
    <Portrait src={portrait} alt='portrait' />
    <div>
      <h2 className='text-center'><b>{ profile.name }</b></h2>
      <h4 className='text-center text-secondary'>{ profile.position }</h4>
      <Component />
    </div>
  </Layout>
)

export default withName
