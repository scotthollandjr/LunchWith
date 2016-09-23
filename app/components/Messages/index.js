import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

var MessageRow = React.createClass ({

  render: function() {
      var messageNodes = this.props.messages.map(function(singleMessage) {
        return (
          <Message subject={singleMessage.subject} key={singleMessage.id} id={singleMessage.id}
            message={singleMessage.message} messagetime={singleMessage.messagetime} firstname={singleMessage.firstname} company={singleMessage.company} title={singleMessage.title} skills={singleMessage.skill} pictureurl={singleMessage.pictureurl} sender_id={singleMessage.sender_id}>
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

  sendReply: function(id) {
    return function(e) {
      var recipient = GoogleMap.messageRecipient;
      var message = document.getElementById("messageTextArea").value;
      message = message.replace(/(?:\r\n|\r|\n)/g, "<br />");
      console.log(message);
      var day = $("input[name=meetDay]:checked").val();
      var time = $("input[name=meetTime]:checked").val();
      var updateUrl = "/sendMessage?message=" + message + "&day=" + day + "&time=" + time + "&recipient_id=" + recipient + "&subject=Someone wants to meet you!";
      console.log(updateUrl);
      $.get(updateUrl, function (result) {
      });
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
          <p className="messageBody">
            <span>{this.props.subject}</span>
          </p>
          <div id={this.props.id} className="message-hidden">
            <p>{this.props.message}</p>
            <div className="responseForm">
              <p className="control">
                <textarea id="messageTextArea" className="textarea" defaultValue="That sounds great. See you then!"></textarea>
              </p>
              <button onClick={this.sendReply(this.props.sender_id)} className="button is-blue">REPLY</button>
              <button onClick={this.closeMessage(this.props.id)} className="button is-danger">CLOSE</button>
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
