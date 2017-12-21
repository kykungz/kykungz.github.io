import React from 'react'
import { getImages } from '../utils/functions'

const lhdImages = getImages('localhackday', 'jpg', 6)
const newsImages = getImages('news', 'jpg', 2)
const exdImages = getImages('exceed', 'jpg', 2)

const achievements = [
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

export default achievements
