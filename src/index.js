import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


var MESSAGES = [];


ReactDOM.render(
  <App messages={MESSAGES}/>,
  document.getElementById('root')
);
