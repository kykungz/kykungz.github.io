import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    font-family: 'work sans';
  }

  .content-container {
    max-width: 900px;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
