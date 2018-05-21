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
    answer: 'กองภณ จรัญวัฒนากิจ'
  },
  {
    title: 'Nationality',
    answer: 'Thai 🇹🇭'
  },
  {
    title: 'Date of birth',
    answer: '29 Jan 1998'
  },
  {
    title: 'Language',
    answer: (
      <Fragment>
        {'Thai (Native) 🇹🇭'} <br />
        {'English (Advance) 🇺🇸'} <br />
        {'German (Elementary) 🇩🇪'} <br />
      </Fragment>
    )
  },
  {
    title: 'Education',
    answer: 'Kasetsart University'
  }
]

export default information
