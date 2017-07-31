import React, { Component } from 'react';
import './ChatApp.css';

import ChatContainer from './ChatContainer'
  //Component integration
  //<ChatContainer messages={this.props.messages} ></ChatContainer>
var MESSAGES = []

class ChatApp extends React.Component {

  render() {
    return (
      <div className="ChatApp">
        <h2 className="ChatAppHeading" >Create your user persona</h2>
        <ChatContainer messages={MESSAGES}>
        </ChatContainer>
      </div>
    );
  }
}
export default ChatApp;


ChatApp.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.shape({
    msg: React.PropTypes.string.isRequired
  }))
};
