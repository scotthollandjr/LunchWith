var React = require('react');
var DefaultLayout = require('./layout');
var Header = require('./Header');
var GoogleMap = require('./GoogleMap');
var skill1 = "Android";
var skill2 = "Java";
var skill3 = "React";
var skill4 = "ALGOL";

var SkillsForm = React.createClass({
  render: function() {
    return (
		<nav className="panel" id="skillsPanel">
		  	<p className="panel-heading">
		    	Show us your skills
		  	</p>
			<p className="panel-block control has-addons">
				<input className="input is-expanded is-medium orange" type="text" placeholder="Ex. JavaScript" />
				<a className="button is-medium orange">
					Add
				</a>
			</p>

		  <p className="panel-block" href="#">
		    { skill1 }
		    <span className="panel-icon starIcon">
		      <i className="fa fa-star"></i>
		    </span>
		  </p>
		  <p className="panel-block" href="#">
		    { skill2 }
		    <span className="panel-icon starIcon">
		      <i className="fa fa-star"></i>
		    </span>
		  </p>
		  <p className="panel-block" href="#">
		    { skill3 }
		    <span className="panel-icon starIcon">
		      <i className="fa fa-star"></i>
		    </span>
		  </p>
		  <p className="panel-block" href="#">
		    { skill4 }
		    <span className="panel-icon starIcon">
		      <i className="fa fa-star"></i>
		    </span>
		  </p>
		  <div className="panel-block">
		    <button className="button is-primary is-fullwidth">
		      Submit
		    </button>
		  </div>
		</nav>
    )
  }
});

module.exports = SkillsForm;