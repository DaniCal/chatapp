import React, { Component } from 'react';
import logo from './logo.png';
import './Home.css';
  //Component integration
  //<ChatContainer messages={this.props.messages} ></ChatContainer>
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
          <div className="wrap" >
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-header">
              <h2 className="App-heading">The easiest way to create user personas</h2>
              <h4 className="App-sub-heading">Create personas in 5 minutes and export them as a pdf. </h4>
              <a className="button button_start" href="/start" >Get Started</a>
            </div>
          </div>
      </div>
    );
  }
}
export default Home;
