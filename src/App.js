import React, { Component } from 'react';
import logo from './logo.png';
import wireframe from './wireframe.png'

import portrait_1 from './portrait_1.png'
import portrait_2 from './portrait_2.png'

import valueProposition_1 from './valueProposition_1.png'
import valueProposition_2 from './valueProposition_2.png'
import valueProposition_3 from './valueProposition_3.png'

import './App.css';


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

class App extends Component {
  //Component integration
  //<ChatContainer messages={this.props.messages} ></ChatContainer>
  render() {
    return (

      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,700,900" rel="stylesheet"></link>
        <div className="wrap" >
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="App-heading">  Make your tech teams high-performing</h2>
            <h4 className="App-sub-heading">  Increase productivity in your teams by writing effective User Stories.</h4>
            <a className="button button_start" href="#start" >Start for Free</a>
            <img src={wireframe} className="wireframe" />
        </div>
        <div className="PropositionContainer">
            <div className="Box PropositionBox">
              <div>
                  <img src={valueProposition_1} className="PropositionImage" />
                  <p className="PropositionTitle">Speed up your development process</p>
                  <p className="PropositionDescription">Give teams more clarity and guidance through an optimized agile workflow.</p>

              </div>
            </div>
            <div className="Box PropositionBox">
              <div>
                  <img src={valueProposition_2} className="PropositionImage" />
                    <p className="PropositionTitle">Make your tech teams more happy</p>
                    <p className="PropositionDescription">Groomly helps you better write user stories to make teams happy.</p>
              </div>
            </div>
            <div className="Box PropositionBox">
              <div>
                  <img src={valueProposition_3} className="PropositionImage" />
                    <p className="PropositionTitle">Speed up your development process</p>
                    <p className="PropositionDescription">Give teams more clarity and guidance through an optimized agile workflow.</p>
              </div>
            </div>
        </div>

        <h1 className="TestmonialHeading">What Users Say</h1>

      <div className="TestimonialContainer">
        <div className="Box TestmonialBox">
          <div>
            <img src={portrait_1} className="TestimonialPortrait"></img>
            <p className="TestimonialText" >Groomly has helped us improve our processes and gave us more clarity. And it’s fun using the prouct. Our teams are happy!</p>
          </div>
          <div>
            <p className="TestmonialAuthor">Oliver Hookins</p>
            <p className="TestimonialJob">Manager Engineering, Contentful</p>
          </div>
        </div>
        <div className="Box TestmonialBox">
          <div>
            <img src={portrait_2} className="TestimonialPortrait"></img>
            <p className="TestimonialText" >Groomly has helped us improve our processes and gave us more clarity. And it’s fun using the prouct. Our teams are happy!</p>
          </div>
          <div>
            <p className="TestmonialAuthor">Peter Richard</p>
            <p className="TestimonialJob">VP Product, Deutsche Bank</p>
          </div>
        </div>
      </div>

    <div className="QuoteContainer">

        <h1 className="TestmonialHeading">Why you should care</h1>
        <p className="Quote">“The key to building a great product users love is writing effective and clear user stories the whole team understands.”</p>
        <p className="QuoteAuthor">Jeff sutherland</p>
        <p className="QuoteAuthorDescription">Co-Creator of Scrum</p>
  </div>

  <div className="CallToActionContainer" >
    <p className="CallToAction">Start writing powerful User Stories your team will love</p>
    <a className="button button_start" href="#start" >Start for Free</a>
  </div>


      </div>

        <footer className="App-footer">
      		<span className="Footer-Title" >Made with ❤ in Berlin</span>
      	</footer>
      </div>
    );
  }
}

App.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.shape({
    msg: React.PropTypes.string.isRequired
  }))
};

export default App;
