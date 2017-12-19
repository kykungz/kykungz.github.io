import React from 'react'
import bcbk8Img from './images/bcbk8.png'
import sellsukiImg from './images/sellsuki.png'

export const profile = {
  name: 'Kongpon Charanwattanakit',
  position: 'Software Developer',
  info: `
    Hi, my name is <b>Jacky</b>. I am currently a software engineering student at Kasetsart University.
    I was fascinated by the art of programming, which brought me into this challenging field.
    I'm also looking for an internship at a software development company.
    If you are interested in me, feel free to contact!
  `
}

export const information = [
  {
    title: 'Firstname',
    answer: 'Kongpon'
  },
  {
    title: 'Lastname',
    answer: 'Charanwattanakit'
  },
  {
    title: 'Nickname',
    answer: 'Jacky'
  },
  {
    title: 'Birthname',
    answer: 'กองภณ จรัญวัฒนากิจ',
    lang: 'th'
  },
  {
    title: 'Nationality',
    answer: 'Thai'
  },
  {
    title: 'Date of birth',
    answer: '29 Jan 1998'
  },
  {
    title: 'Language',
    answer: (
      <span>
        Thai (Native)<br/>
        English (Advance)<br/>
        German (Elementary)<br/>
      </span>
    )
  },
  {
    title: 'Education',
    answer: 'Kasetsart University'
  }
]

export const skills = [
  {
    icon: 'devicon-java-plain colored',
    variant: 'danger',
    language: 'Java',
    frameworks: 'Android, Swing, Socket, IoT',
    level: '95'
  },
  {
    icon: 'devicon-javascript-plain colored',
    variant: 'primary',
    language: 'Javascript',
    frameworks: 'ES6, Vue.js, React, jQuery, Node, Jest',
    level: '95'
  },
  {
    icon: 'devicon-html5-plain colored',
    variant: 'success',
    language: 'HTML+CSS',
    frameworks: 'Bootstrap, Element-UI, Sass, CSS3',
    level: '80'
  },
  {
    icon: 'devicon-python-plain colored',
    variant: 'warning',
    language: 'Python',
    frameworks: 'Arduino, Tkinter, Django',
    level: '75'
  },
  {
    icon: 'devicon-ruby-plain colored',
    variant: 'danger',
    language: 'Ruby',
    frameworks: 'Ruby on Rails',
    level: '60'
  },
  {
    icon: 'devicon-swift-plain colored',
    variant: 'info',
    language: 'Swift',
    frameworks: 'iOS, Storyboard',
    level: '55'
  }
]

export const tools = {
  icon: 'wrench',
  info: []
}

export const experiences = [
  {
    position: 'Software Developer Intern',
    company: 'Sellsuki Co., Ltd.',
    alt: 'Sellsuki',
    image: sellsukiImg,
    info: [
      (
        <span>
          <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/akita.wh/">
            Akita Warehouse
          </a>
          &nbsp;WMS (Warehouse Management System)
        </span>
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
