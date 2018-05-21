import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import 'devicon-2.2/devicon.min.css'

import { injectGlobal } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Trirong|Work+Sans');

  * {
    font-family: 'Work Sans', 'Trirong', sans-serif;
  }

  .content-container {
    max-width: 900px;
  }

  .image-container {
    max-width: 600px;
    margin: auto;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active {
    background-color: hsl(0, 0%, 91%) !important;
  }

  /* Mobile */
  @media screen and (max-width: 480px) {}

  /* Tablet */
  @media screen and (max-width: 768px) {}

  /* Desktop */
  @media screen and (max-width: 1024px) {}
`

ReactDOM.render(<App />, document.getElementById('root'))
