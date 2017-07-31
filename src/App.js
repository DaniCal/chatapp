import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';


import {
	BrowserRouter,
	Route
} from 'react-router-dom';

//App component
import Home from './Home'
import ChatApp from './ChatApp'

class App extends Component {
  //Component integration
  //<ChatContainer messages={this.props.messages} ></ChatContainer>
  render() {
    return (
      <BrowserRouter>

      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,700,900" rel="stylesheet"></link>
        <Route exact path="/" component={Home}> </Route>
        <Route exact path="/start" component={ChatApp}> </Route>
      </div>
      </BrowserRouter>
    );
  }
}



export default App;
