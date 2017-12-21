import React from 'react'

import bcbk8Img from '../assets/images/bcbk8.png'
import sellsukiImg from '../assets/images/sellsuki.png'

const experiences = [
  {
    position: 'Software Developer Intern',
    company: 'Sellsuki Co., Ltd.',
    alt: 'Sellsuki',
    image: sellsukiImg,
    info: [
      (
        <React.Fragment>
          <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/akita.wh/">
            Akita Warehouse
          </a>
          &nbsp;WMS (Warehouse Management System)
        </React.Fragment>
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
  }
]

export default experiences
