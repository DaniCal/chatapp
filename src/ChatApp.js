import React, { Component } from 'react';
import './ChatApp.css';
  //Component integration
  //<ChatContainer messages={this.props.messages} ></ChatContainer>
class ChatApp extends React.Component {
  render() {
    return (
      <div className="ChatApp">
      <div className="wrap" >
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
export default ChatApp;
