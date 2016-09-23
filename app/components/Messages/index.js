import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

var MessageRow = React.createClass ({

  render: function() {
      var messageNodes = this.props.messages.map(function(singleMessage) {
        return (
          <Message subject={singleMessage.subject} key={singleMessage.id}
            message={singleMessage.message}>
          </Message>
        );
      });

      return (
        <div className="messageList">
          {messageNodes}
        </div>
    );
  }
});

var messages = {
  message1 {
    imageUrl: "https://pbs.twimg.com/profile_images/660946436801101824/niM7azZS.jpg",
    firstName: "Scout",
    time: "10/7/2016",
    message: "Hey I would like to meet up! How does Friday at 12:00 PM work for you?",
    skills: ["Java", "JavaScript", "Nachos"],
    title: "Chief Taco Officer",
    company: "TACOCAT LABS"
  },
  message2 {
    imageUrl: "http://dp.topcovers4fb.com/wp-content/uploads/2015/12/Alvin-And-The-Chipmunks-Display-Picture.jpg",
    firstName: "Taco",
    time: "11/8/2015",
    message: "Hey I would like to meet up! How does Monday at 11:00 AM work for you?",
    skills: ["UX", "Node", "SQL"],
    title: "Financial Advisor",
    company: "Publix"
  }
}

var Message = React.createClass({

  onClick() {
    document.getElementById("messageOverlay").style.height = "0%";
  },

  render: function() {
    return (
      <div>
        <div className="message">
          <img src={this.props.imageUrl} className="messagePhoto"></img>
          <p className="messageSubject">
            <span className="messageName">{this.props.firstName}</span>
            <span className="messageTime">{this.props.time}</span>
          </p>
          <p className="messageTitle">{this.props.title} at {this.props.company}</p>
          <p className="messageSkills">Expert in: {this.props.skills}</p>
          <p className="messageBody">
            <span>{this.props.subject}</span>
            <span>{this.props.message}</span>
          </p>
        </div>
      </div>
    );
  }
});


var Messaging = React.createClass ({

    getInitialState: function() {
      return {
        receivedMessages: [],
        sentMessages: []
      };
    },

    componentDidMount: function() {
  		$.get("/checkReceivedMessages", function (result) {
        this.setState({
          receivedMessages: result.messages
        });
  		}.bind(this));
      $.get("/checkSentMessages", function (result) {

        this.setState({
          sentMessages: result.messages
        });
      }.bind(this));
  	},

    render: function() {
      var messages = [];
      return (
        <div className="flex_container">

          <MessageRow messages={this.state.sentMessages} />

        </div>
      );
    }
});

export default Messaging;
