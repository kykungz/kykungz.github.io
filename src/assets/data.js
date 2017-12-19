import React from 'react'

import bcbk8Img from './images/bcbk8.png'
import sellsukiImg from './images/sellsuki.png'

const getImages = (event, type, limit) => {
  let images = []
  for(let i = 0; i < limit; i++) {
    try {
      images = [...images, require(`./images/${event}/${i+1}.${type}`)]
    } catch (e) {
      images = [...images, require(`./images/${event}/${i+1}.png`)]
    }
  }
  return images
}

const lhdImages = getImages('localhackday', 'jpg', 6)
const newsImages = getImages('news', 'jpg', 2)
const exdImages = getImages('exceed', 'jpg', 2)

export const profile = {
  name: 'Kongpon Charanwattanakit',
  position: 'Software Developer',
  info: (
    <span>
      Hi, my name is <b>Jacky</b>.
      I am currently a Software Engineering student at Kasetsart University.
      I was fascinated by the art of programming,
      which brought me into this challenging field.
      I'm also looking for an internship in a software development company.
      If you are interested in me, feel free to <a href="/">contact</a>!
    </span>
  )
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
    answer: (
      <React.Fragment>
        Thai <span role="img" aria-label="th">🇹🇭</span>
      </React.Fragment>
    )
  },
  {
    title: 'Date of birth',
    answer: '29 Jan 1998'
  },
  {
    title: 'Language',
    answer: (
      <React.Fragment>
        Thai (Native) <span role="img" aria-label="th">🇹🇭</span><br/>
        English (Advance) <span role="img" aria-label="en">🇺🇸</span><br/>
        German (Elementary) <span role="img" aria-label="de">🇩🇪</span><br/>
      </React.Fragment>
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

export const achievements = [
  {
    icon: 'trophy',
    variant: 'danger',
    title: (
      <React.Fragment>
        1<sup>st</sup> place "Local Hack Day 2016"
      </React.Fragment>
    ),
    description: 'Student Hackathon hosted by GitHub and Major League Hacking (MLH)',
    images: lhdImages.map((image, i) =>
      <img key={i} className="img-fluid" src={ image } alt=""/>
    )
  },
  {
    icon: 'newspaper-o',
    variant: 'info',
    title: 'Interviewed with PostToday Magazine',
    description: (
      <React.Fragment>
        <a rel="noopener noreferrer" target="_blank" href="https://www.posttoday.com/newspaper/magazine/469861">
          Read Article <i className="fa fa-external-link"></i>
        </a>
      </React.Fragment>
    ),
    images: (
      <div className="row no-gutters">
        { newsImages.map((image, i) =>
          <div key={i} className="col-sm">
            <img className="img-fluid" src={ image } alt={ image }/>
          </div>
        ) }
      </div>
    )
  },
  {
    icon: 'certificate',
    variant: 'warning',
    title: (
      <React.Fragment>
        "Best Software Design" award eXceed Camp 14<sup>th</sup>
      </React.Fragment>
    ),
    description: 'Software development training camp',
    images: exdImages.map((image, i) =>
      <img key={i} className="img-fluid" src={ image } alt={ image }/>
    )
  }
]
