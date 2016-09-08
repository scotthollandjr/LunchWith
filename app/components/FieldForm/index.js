import React from 'react';
import * as userService from '../../services/user-service';
import MultiSelect from 'ReactSelectize.MultiSelect';

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

    	return (
	    	<div>
				<nav className="panel" id="skillsPanel">
				  	<p className="panel-heading">Whats your expertise?</p>
				  	<form onSubmit={this.addSkill}>
						<p className="panel-block control has-addons">
							<span className="select is-fullwidth is-expanded is-medium is-orange">
								<MultiSelect
									placeholder = "Skilz"
									options = ["BACKEND", "FRONTEND", "UI / UX", "PROJECT MANAGEMENT", "BRANDING / IDENTITY", "SALES / BUSINESS DEV", "MOBILE", "DATABASE"].map(function(skill) {
										return {label: skill, value: skill};
									});
									onValueChange = {function(values){
										alert(values);
									}}
									/>
							</span>
							<button type="submit" className="button is-medium is-orange">
								Add
							</button>
						</p>
					</form>

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
	    )
	}
});

export default FieldForm;
