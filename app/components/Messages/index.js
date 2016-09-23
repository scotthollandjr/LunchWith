import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

var MessageRow = React.createClass ({

  render: function() {
      var messageNodes = this.props.messages.map(function(singleMessage) {
        return (
          <Message subject={singleMessage.subject} key={singleMessage.id}
            id={singleMessage.id} message={singleMessage.message} messagetime={singleMessage.messagetime} firstname={singleMessage.firstname} company={singleMessage.company} title={singleMessage.title} skills={singleMessage.skill} pictureurl={singleMessage.pictureurl} other_user_id={singleMessage.other_user_id}>
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

  openMessage(id) {
    return function(e) {
      document.getElementById(id).style.display = "block";
    }
  },

  closeMessage(id) {
    return function(e) {
      document.getElementById(id).style.display = "none";
    }
  },

  sendReply(id) {
    return function(e) {
      console.log(id);
      var recipient = id;
      var message = document.getElementById("replyTextArea").value;
      message = message.replace(/(?:\r\n|\r|\n)/g, "<br />");
      console.log(message);
      var updateUrl = "/sendMessage?message=" + message + "&recipient_id=" + recipient + "&subject=replied to your message!";
      console.log(updateUrl);
      $.get(updateUrl, function (result) {
      });
      document.getElementById(id).style.display = "none";
    }
  },

  render: function() {
    return (
      <div>
        <div className="message" onClick={this.openMessage(this.props.id)}>
          <img src={this.props.pictureurl} className="messagePhoto"></img>
          <p className="messageSubject">
            <span className="messageName">{this.props.firstname}</span>
            <span className="messageTime">{this.props.messagetime}</span>
          </p>
          <p className="messageTitle">{this.props.title} at {this.props.company}</p>
          <p className="messageSkills">Expert in: {this.props.skills}</p>
          <p className="messageBody">{this.props.subject}</p>
          <div id={this.props.id} className="message-hidden">
            <p>{this.props.message}</p>
            <div className="responseForm">
              <p className="control">
                <textarea id="replyTextArea" className="textarea" defaultValue="That sounds great. See you then!"></textarea>
              </p>
              <button onClick={this.sendReply(this.props.other_user_id)} className="button is-blue">REPLY</button>
            </div>
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
