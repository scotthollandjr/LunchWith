import React from 'react';

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
				<input className="input is-expanded is-medium is-orange" type="text" placeholder="Ex. JavaScript" />
				<a className="button is-medium is-orange">
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
		    <a href="/main" className="button is-primary is-fullwidth">
		      Submit
		    </a>
		  </div>
		</nav>
    )
  }
});

export default SkillsForm;