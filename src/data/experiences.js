import React, { Fragment } from 'react'

import bcbk8Img from '../assets/images/bcbk8.png'
import sellsukiImg from '../assets/images/sellsuki.png'
// import ywc15Img from '../assets/images/ywc15.jpg'
import kuImg from '../assets/images/ku.jpg'
import tedImg from '../assets/images/ted.jpg'

const experiences = [
  {
    position: 'Software Developer Intern',
    company: 'Sellsuki Co., Ltd.',
    alt: 'Sellsuki',
    image: sellsukiImg,
    info: [
      (
        <Fragment>
          <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/akita.wh/">
            Akita Warehouse
          </a>
          &nbsp;WMS (Warehouse Management System)
        </Fragment>
      ),
      'Fullstack',
      'Vue.js, Vuex, Jest, Node, MySQL',
      'June, 2017'
    ]
  },
  {
    position: 'Web Developer',
    company: 'Barcamp Bangkhen 8',
    alt: 'BCBK8',
    image: bcbk8Img,
    info: [
      (
        <a rel="noopener noreferrer" target="_blank" href="http://2017.barcampbangkhen.org">
          Barcamp Bangkhen 8
        </a>
      ),
      'Frontend',
      'React, Sass/SCSS',
      'November, 2017'
    ]
  },
  {
    position: 'Teaching Assistant',
    company: 'Kasetsart University',
    alt: 'ku',
    image: kuImg,
    info: [
      'Object-Oriented Programming II',
      'Design Pattern',
      'Java',
      'January, 2018'
    ]
  },
  {
    position: 'Web Developer',
    company: 'TEDxKasetsartU',
    alt: 'TEDx',
    image: tedImg,
    info: [
      'React, Next.js',
      'January, 2018'
    ]
  }
  // {
  //   position: 'Web Programmer',
  //   company: <Fragment>Young Webmaster Camp 15<sup>th</sup></Fragment>,
  //   alt: 'BCBK8',
  //   image: ywc15Img,
  //   info: [
  //     'Vue.js',
  //     'Firebase Realtime Database',
  //     'January, 2018'
  //   ]
  // }
]

export default experiences
