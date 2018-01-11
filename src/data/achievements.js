import React, { Fragment } from 'react'
import { getImages } from '../utils/functions'

const lhdImages = getImages('localhackday', 'jpg', 6)
const newsImages = getImages('news', 'jpg', 2)
const exdImages = getImages('exceed', 'jpg', 2)
const ywc15Images = getImages('ywc15', 'jpg', 2)
const ywc15NewsImages = getImages('ywc15-news', 'jpg', 2)

const achievements = [
  {
    icon: 'trophy',
    variant: 'danger',
    title: (
      <Fragment>
        1<sup>st</sup> place "Local Hack Day 2016"
      </Fragment>
    ),
    description: 'Student Hackathon hosted by GitHub and Major League Hacking (MLH)',
    images: lhdImages.map((image, i) =>
      <img key={i} className="img-fluid" src={ image } alt=""/>
    )
  },
  {
    icon: 'newspaper-o',
    variant: 'danger',
    title: 'Interviewed with PostToday Magazine',
    description: (
      <Fragment>
        <a rel="noopener noreferrer" target="_blank" href="https://www.posttoday.com/newspaper/magazine/469861">
          Read Article <i className="fa fa-external-link"></i>
        </a>
      </Fragment>
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
    variant: 'danger',
    title: (
      <Fragment>
        "Best Software Design" award eXceed Camp 14<sup>th</sup>
      </Fragment>
    ),
    description: 'Software development training camp',
    images: exdImages.map((image, i) =>
      <img key={i} className="img-fluid" src={ image } alt={ image }/>
    )
  },
  {
    icon: 'certificate',
    variant: 'danger',
    title: (
      <Fragment>
        "The Best Innovation" award YWC#15<sup>th</sup>
      </Fragment>
    ),
    description: (
      <Fragment>
        Young Webmaster Camp 15<sup>th</sup>: Digital Innovation
      </Fragment>
    ),
    images: ywc15Images.map((image, i) =>
      <img key={i} className="img-fluid" src={ image } alt={ image }/>
    )
  },
  {
    icon: 'newspaper-o',
    variant: 'danger',
    title: 'Interviewed with VCHARKARN.com',
    description: (
      <Fragment>
        Representative of Web Programmer.{' '}
        <a rel="noopener noreferrer" target="_blank" href="http://www.vcharkarn.com/vnews/506127">
          Read Article <i className="fa fa-external-link"></i>
        </a>
      </Fragment>
    ),
    images: ywc15NewsImages.map((image, i) =>
      <img key={i} className="img-fluid" src={ image } alt={ image }/>
    )
  }
]

export default achievements
