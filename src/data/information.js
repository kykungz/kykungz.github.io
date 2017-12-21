import React, { Fragment } from 'react'

const information = [
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
      <Fragment>
        Thai <span role="img" aria-label="th">🇹🇭</span>
      </Fragment>
    )
  },
  {
    title: 'Date of birth',
    answer: '29 Jan 1998'
  },
  {
    title: 'Language',
    answer: (
      <Fragment>
        Thai (Native) <span role="img" aria-label="th">🇹🇭</span><br/>
        English (Advance) <span role="img" aria-label="en">🇺🇸</span><br/>
        German (Elementary) <span role="img" aria-label="de">🇩🇪</span><br/>
      </Fragment>
    )
  },
  {
    title: 'Education',
    answer: 'Kasetsart University'
  }
]

export default information
