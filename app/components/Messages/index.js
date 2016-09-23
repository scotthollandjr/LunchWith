import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

var MessageRow = React.createClass ({

  render: function() {
      var messageNodes = this.props.messages.map(function(singleMessage) {
        return (
          <Message subject={singleMessage.subject} key={singleMessage.messagetime}
            message={singleMessage.message} messagetime={singleMessage.messagetime} firstName={singleMessage.firstname} company={singleMessage.company} title={singleMessage.title} skills={singleMessage.skill} pictureurl={singleMessage.pictureurl}>
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

var Message = React.createClass({

  onClick() {

  },

  openMessage: function(id) {
    document.getElementById(id).style.display = "";
  },

  render: function() {
    return (
      <div>
        <div className="message" onClick={this.openMessage(this.props.messagetime)}>
          <img src={this.props.pictureurl} className="messagePhoto"></img>
          <p className="messageSubject">
            <span className="messageName">{this.props.firstname}</span>
            <span className="messageTime">{this.props.messagetime}</span>
          </p>
          <p className="messageTitle">{this.props.title} at {this.props.company}</p>
          <p className="messageSkills">Expert in: {this.props.skills}</p>
          <p className="messageBody">
            <span>{this.props.subject}</span>
            <span>{this.props.message}</span>
          </p>
          <div id={this.props.messagetime} className="message-hidden">
            <p>TESTING</p>
            <p>pictureurl: {this.props.pictureurl}</p>
            <p>firstname: {this.props.firstname}</p>
            <p>messagetime: {this.props.messagetime}</p>
            <p>title: {this.props.title}</p>
            <p>company: {this.props.company}</p>
            <p>skills: {this.props.skills}</p>
            <p>subject: {this.props.subject}</p>
            <p>message: {this.props.message}</p>
            <button className="button is-blue">REPLY</button>
          </div>
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
        console.log(result);
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

          <MessageRow messages={this.state.receivedMessages} />

        </div>
      );
    }
});

export default Messaging;
