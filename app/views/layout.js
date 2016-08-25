var React = require('react');

var MasterLayout = React.createClass({
  render: function() {
    return (
      <html lang="en-US">
        <head>
          <meta charset="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html" />
          <link href="/css/bulma.css" rel="stylesheet" type="text/css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
          <link href="/css/styles.css" rel="stylesheet"  type="text/css"/>
          <title>LunchWith__</title>
        </head>
        <body>
          <div className="container-fluid">
              {this.props.children}
          </div>
        </body>
      </html>
    )
  }
});

module.exports = MasterLayout;