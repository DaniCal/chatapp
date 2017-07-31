import React, { Component } from 'react';
import logo from './logo.png';
import './Home.css';
  //Component integration
  //<ChatContainer messages={this.props.messages} ></ChatContainer>
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
              <h2 className="HomeHeading">The easiest way to create user personas</h2>
              <h4 className="HomeSubheading">Create personas in 5 minutes and export them as a pdf. </h4>
              <a className="StartedButton" href="/start" >Get Started</a>
      </div>
    );
  }
}
export default Home;
