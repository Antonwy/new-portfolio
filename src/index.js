import React from 'react';
import ReactDOM from 'react-dom';
import './Styling/main.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  document.getElementById('root')
);
