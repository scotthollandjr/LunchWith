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
          <div>
            <div className="message">
              <img src="/images/avatar1.jpg" className="messagePhoto"></img>
              <p className="messageSubject">
                <span className="messageName">Appa S.</span>
                <span className="messageTime">10:22 PM</span>
              </p>
              <p className="messageBody">
                Appa would like to meet-up! How does Friday @ 12:00 work?
              </p>
            </div>
            <div className="message">
              <img src="/images/avatar2.jpg" className="messagePhoto"></img>
              <p className="messageSubject">
                <span className="messageName">Taco C.</span>
                <span className="messageTime">3:24 PM</span>
              </p>
              <p className="messageBody">
                Taco would like to meet-up! How does Friday @ 11:30 work?
              </p>
            </div>
            <div className="message">
              <img src="/images/avatar3.jpg" className="messagePhoto"></img>
              <p className="messageSubject">
                <span className="messageName">Kyle W.</span>
                <span className="messageTime">9/11</span>
              </p>
              <p className="messageBody">
                Kyle would like to meet-up! How does Thursday @ 1:00 work?
              </p>
            </div>
            <div className="message">
              <img src="/images/avatar1.jpg" className="messagePhoto"></img>
              <p className="messageSubject">
                <span className="messageName">Rick H.</span>
                <span className="messageTime">9/10</span>
              </p>
              <p className="messageBody">
                Rick would like to meet-up! How does Wednesday @ 11:00 work?
              </p>
            </div>
          </div>
        </div>

    );
  }
});

var Message = React.createClass({
  render: function() {
    return (
      <div className="message">
        <h2 className="messageSubject">
          {this.props.subject}
        </h2>
        <p>
        {this.props.message}
        </p>
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
        console.log(result);

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
