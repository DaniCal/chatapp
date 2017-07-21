import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var MESSAGES = [
  {
    msg: "Hello",
    id: 1

  },
  {
    msg: "What is your name?",
    id: 2

  }
];


ReactDOM.render(
  <App messages={MESSAGES}/>,
  document.getElementById('root')
);
