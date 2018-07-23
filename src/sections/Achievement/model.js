import React, { Fragment } from 'react'

import { getImages } from '../../utils/functions'
import Link from '../../components/Link'

const lhdImages = getImages('localhackday', 6)
const newsImages = getImages('news', 2)
const exdImages = getImages('exceed', 2)
const ywc15Images = getImages('ywc15', 2)
const ywc15NewsImages = getImages('ywc15-news', 2)
const tescoLotusImages = getImages('tescolotus', 2)
const siriventureImages = getImages('siriventure', 2)

const achievements = [
  {
    icon: 'trophy',
    variant: 'danger',
    title: (
      <Fragment>
        1<sup>st</sup> place 'Local Hack Day 2016'
      </Fragment>
    ),
    description: 'Student Hackathon hosted by GitHub and Major League Hacking (MLH)',
    images: lhdImages.map((image, i) =>
      <img key={i} className='img-fluid' src={image} alt={image} />
    )
  },
  {
    icon: 'newspaper-o',
    variant: 'danger',
    title: 'Interviewed with PostToday Magazine',
    description: 'Representative of the Winner team',
    images: (
      <div className='row no-gutters'>
        { newsImages.map((image, i) =>
          <div key={i} className='col-sm'>
            <img className='img-fluid' src={image} alt={image} />
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
        'Best Software Design' award eXceed Camp 14<sup>th</sup>
      </Fragment>
    ),
    description: 'Software development training camp',
    images: exdImages.map((image, i) =>
      <img key={i} className='img-fluid' src={image} alt={image} />
    )
  },
  {
    icon: 'certificate',
    variant: 'danger',
    title: (
      <Fragment>
        'The Best Innovation' award YWC#15<sup>th</sup>
      </Fragment>
    ),
    description: (
      <Fragment>
        Young Webmaster Camp 15<sup>th</sup>: Digital Innovation
      </Fragment>
    ),
    images: ywc15Images.map((image, i) =>
      <img key={i} className='img-fluid' src={image} alt={image} />
    )
  },
  {
    icon: 'newspaper-o',
    variant: 'danger',
    title: 'Representative of YWC Web Programmer',
    description: (
      <Fragment>
        <Link href='http://www.vcharkarn.com/vnews/506127' title='vchakarn.com' />
        <Link href='https://mgronline.com/management/detail/9610000005827' title='Manager Online' />
        <Link href='https://www.brandbuffet.in.th/2018/01/young-webmaster-camp-15th/' title='Brand Buffet' />
        <Link href='http://www.ryt9.com/s/tpd/2770173' title='Thai Post' />
      </Fragment>
    ),
    images: ywc15NewsImages.map((image, i) =>
      <img key={i} className='img-fluid' src={image} alt={image} />
    )
  },
  {
    icon: 'certificate',
    variant: 'danger',
    title: <Fragment>1<sup>st</sup> Runner Up Tesco Lotus Hackathon 2018</Fragment>,
    description: 'Tesco Lotus Hackathon: Revolutionising Retail Towards Thailand 4.0',
    images: tescoLotusImages.map((image, i) =>
      <img key={i} className='img-fluid' src={image} alt={image} />
    )
  },
  {
    icon: 'certificate',
    variant: 'danger',
    title: 'The Winner Liveable Society Hackathon',
    description: (
      <Fragment>
        Siri Ventures x HUBBA Stadium Hackathon <Link href='https://techsauce.co/property/siri-ventures-hubba-stadium-liveable-society-hackathon-2018/' title='techsauce.co' />
      </Fragment>
    ),
    images: siriventureImages.map((image, i) =>
      <img key={i} className='img-fluid' src={image} alt={image} />
    )
  }
]

export default achievements.reverse()
