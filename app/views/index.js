var React = require('react');
var DefaultLayout = require('./layout');
var Header = require('./Header');
var GoogleMap = require('./GoogleMap');
var SkillsForm = require('./SkillsForm');

var IndexComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name}>
        <Header />
        <GoogleMap />
        <SkillsForm />
      </DefaultLayout>
    )
  }
});

module.exports = IndexComponent;