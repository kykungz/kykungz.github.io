import React, { Fragment } from 'react'

import bcbk8Img from '../../assets/images/bcbk8.png'
import sellsukiImg from '../../assets/images/sellsuki.png'
// import ywc15Img from '../../assets/images/ywc15.jpg'
import kuImg from '../../assets/images/ku.jpg'
import tedImg from '../../assets/images/ted.jpg'
import wongnaiImg from '../../assets/images/wongnai.png'
import yeahImg from '../../assets/images/yeah.png'
import ngImg from '../../assets/images/nisitgeneration.jpg'
import omnivirtImg from '../../assets/images/omnivirt.png'
import cleverseImg from '../../assets/images/cleverse.jpg'

const experiences = [
  {
    position: 'Software Developer Intern',
    company: 'Sellsuki Co., Ltd.',
    alt: 'Sellsuki',
    image: sellsukiImg,
    info: [
      (
        <Fragment>
          <a rel='noopener noreferrer' target='_blank' href='https://www.facebook.com/akita.wh/'>
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
        <a rel='noopener noreferrer' target='_blank' href='http://2017.barcampbangkhen.org'>
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
      'React',
      'January, 2018'
    ]
  },
  {
    position: 'Developer Intern',
    company: 'Wongnai Media',
    alt: 'wongnai',
    image: wongnaiImg,
    info: [
      'Wongnai Travel',
      'React',
      'GraphQL',
      'June, 2018'
    ]
  },
  {
    position: 'Co-Founder',
    company: 'YEAH',
    alt: 'yeah',
    image: yeahImg,
    info: [
      <a rel='noopener noreferrer' target='_blank' href='https://www.facebook.com/yeahentrepreneurhub/'>
        Young Entrepreneur Assembly Hub
      </a>,
      'The largest young startup community in Thailand',
      'June, 2018'
    ]
  },
  {
    position: 'Co-Founder/Developer',
    company: 'Nisit Generation',
    alt: 'nisitgen',
    image: ngImg,
    info: [
      <a rel='noopener noreferrer' target='_blank' href='https://www.facebook.com/NisitGeneration'>
        Nisit Generation
      </a>,
      'Opportunities for College Student',
      'June, 2018'
    ]
  },
  {
    position: 'Software Engineer Intern',
    company: 'OmniVirt',
    alt: 'omnivirt',
    image: omnivirtImg,
    info: [
      'Leading Immersive Advertising (3D, VR/AR, 360°) Platform based in Silicon Valley',
      'React',
      'Ruby on Rails',
      'June, 2019'
    ]
  },
  {
    position: 'Software Engineer & Part-time',
    company: 'Cleverse',
    alt: 'cleverse',
    image: cleverseImg,
    info: [
      'Venture Builder',
      'React + Typescript',
      'React Native',
      'Aug, 2019'
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

export default experiences.reverse()
