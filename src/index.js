import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTS...
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// SCSS...
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
