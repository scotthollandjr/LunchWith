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
      return {messages: []};
    },

    componentDidMount: function() {
  		$.get("/checkMessages", function (result) {
        console.log(result);

        this.setState({
          messages: result.messages
        });
  		}.bind(this));
  	},

    render: function() {
      var messages = [];
      return (
        <div className="flex_container">

        <h3> Message container </h3>

        <MessageRow messages={this.state.messages} />

        </div>
      );
    }
});

export default Messaging;
