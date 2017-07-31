import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

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

      <div className="container">
        <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,700,900" rel="stylesheet"></link>
        <Route exact path="/" component={Home}> </Route>
        <Route exact path="/start" component={ChatApp}> </Route>
      </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.shape({
    msg: React.PropTypes.string.isRequired
  }))
};

export default App;

class Message extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        msg:"empty message"
    };
    }

  render(){
    return <p className="Message">{this.props.msg}</p>
  }
}

class Input extends React.Component {
  render() {
    return <input
      autoFocus
      className="Input"
      type="text"
      value={this.props.inputValue}
      onKeyPress={this.props.handleKeyPress}
      onChange={this.props.onChange}
      />
  }
}

class ChatContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        messages: this.props.messages,
        inputValue: ""
      }
  }

  updateInputValue = (e) => {
    console.log("here")
    this.setState({
      inputValue: e.target.value
    });
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Enter key pressed");
      var updatedMessages = this.state.messages.slice();
      updatedMessages.push({msg: "> " + this.state.inputValue});

      this.setState({
        messages: updatedMessages,
        inputValue: ""
      })

      var accessToken = "32d148b6f6274ce68538006ccfbf7d88";
      var json = '{"query":"' + this.state.inputValue + '","lang":"en","sessionId":"123456"}'
      var url = "https://api.api.ai/v1/query?v=20170721";

      fetch(url, {
         method: 'POST',
         body: json,
         headers: {
           Authorization: "Bearer " + accessToken,
           "Content-Type": "application/json",
          }
       })
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData.result.fulfillment.speech)
          var message = responseData.result.fulfillment.speech
          var updatedMessages = this.state.messages.slice();
          updatedMessages.push({msg: message});
          this.setState({
            messages:updatedMessages
          })
        })
        .catch(error => {
          console.log(error)
        })
      console.log("component did mount")
    }


  }

  componentDidMount() {


    var accessToken = "32d148b6f6274ce68538006ccfbf7d88";
    var json = '{"query":"focus","lang":"en","sessionId":"123456"}'
    var url = "https://api.api.ai/v1/query?v=20170721";

    fetch(url, {
       method: 'POST',
       body: json,
       headers: {
         Authorization: "Bearer " + accessToken,
         "Content-Type": "application/json",
        }
     })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData.result.fulfillment.speech)
        var message = responseData.result.fulfillment.speech
        var updatedMessages = this.state.messages.slice();
        updatedMessages.push({msg: message});
        this.setState({
          messages:updatedMessages
        })
      })
      .catch(error => {
        console.log(error)
      })
    console.log("component did mount")
  }

  componentDidUpdate(){
    console.log("component did update")
  }


  render(){
    return(
      <div className="ChatContainer">
      {this.state.messages.map(function(message){
        return <Message msg={message.msg} key={message.id}/>
      })}
      <Input className="Input" handleKeyPress={this.handleKeyPress} inputValue={this.state.inputValue} onChange={this.updateInputValue}></Input>
    </div>
  )

  }
}
