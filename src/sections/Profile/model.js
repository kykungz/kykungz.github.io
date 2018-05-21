import React, { Fragment } from 'react'
import { Link } from 'react-scroll'

const profile = {
  name: 'Kongpon Charanwattanakit',
  position: 'Software Developer',
  info: (
    <Fragment>
      Hi, my name is <b><u>Jacky</u></b>.
      I am currently a Software Engineering student at Kasetsart University.
      I was fascinated by the art of programming,
      which brought me into this challenging field.
      I'm also looking for an internship in a software development company.
      If you are interested in me, feel free to{' '}
      <a href='#contact'>
        <Link smooth='easeInOutQuint' to='contact'>
          <b>contact!</b>
        </Link>
      </a>
    </Fragment>
  )
}

export default profile
