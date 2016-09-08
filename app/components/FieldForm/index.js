import React from 'react';
import * as userService from '../../services/user-service';
import Select from 'react-select';

var Router = require('react-router');

var SkillsList = React.createClass({

	render: function() {
		var skillEntries = this.props.entries;

		function createSkill(skill) {
			return (
				<p key={skill.key} className="panel-block" href="#">
				    {skill.text}
				    <span className="panel-icon starIcon">
				      	<i className="fa fa-star"></i>
				    </span>
				    <span className="panel-icon is-right">
				      	<i className="fa fa-trash"></i>
				    </span>

				 </p>
			);
		}

		var skillList = skillEntries.map(createSkill);

		return (
			<div>
				{skillList}
			</div>
		);
	}
});

var FieldForm = React.createClass({

	logChange: function(val) {
		console.log("Selected: " + val);
	},

	createNewUser: function() {
	    productService.newUser({firstName: "sweet-ass", lastName: "auto-encoder"});
	},

	getInitialState: function() {
		return {
			skills: []
		};
	},

	handleClick: function(event) {
		if (this.state.skills <= 2) {
			alert("Whoops, it looks like you haven't entered at least 3 of your top skills!")
		} else {
			Router.browserHistory.push('/activity');
		}
	},

	addSkill: function(e) {
		var skillArray = this.state.skills;

		skillArray.push(
		{
			text: this._inputElement.value,
			key: Date.now(),
			starred: false
			}
		);
		this.setState({
			skills: skillArray
		});

		this._inputElement.value = "";

		e.preventDefault();
	},

	render: function() {
		var options = [
			{ value: 'BACKEND', label: 'BACKEND' },
			{ value: 'FRONTEND', label: 'FRONTEND' },
			{ value: 'UI / UX', label: 'UI / UX' },
			{ value: 'PROJECT MANAGEMENT', label: 'PROJECT MANAGEMENT' },
			{ value: 'BRANDING / IDENTITY', label: 'BRANDING / IDENTITY' },
			{ value: 'SALES / BUSINESS DEV', label: 'SALES / BUSINESS DEV' },
			{ value: 'MOBILE', label: 'MOBILE' },
			{ value: 'DATABASE', label: 'DATABASE' }
		];

  	return (
    	<div>
				<nav className="panel" id="skillsPanel">
			  	<p className="panel-heading">What is your expertise?</p>
			  	<form onSubmit={this.addSkill}>
						<p className="panel-block control has-addons">
							<button type="submit" className="button is-medium is-orange">
								Add
							</button>
						</p>
					</form>

					<Select
							name="form-field-name"
							value="Select 3 fields"
							multi={true}
							options={options}
					/>

					<SkillsList entries={this.state.skills} />

			  	<div className="panel-block">
			    	<a to="/main" onClick={this.handleClick} className="button is-blue is-fullwidth">
			      		<p>Submit</p>
			    	</a>
			  	</div>
				</nav>
        <p className="panel-block control has-addons">
        	<button onClick={this.createNewUser} type="submit" className="button is-medium is-orange">
          		New User
        	</button>
        </p>
      </div>
    );
	}
});

export default FieldForm;
