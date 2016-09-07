import React from 'react';
import * as userService from '../../services/user-service';

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

function logElements(skillObject){
			console.log(skillObject.text);
}

function formatSkills(skillsAsArray){
	var skillString = "";

	for (var i = 0; i < skillsAsArray.length; i++) {
		skillString += skillsAsArray[i].text + ",";
	}
	skillString = skillString.slice(0, -1);
	return skillString;
}

var SkillsForm = React.createClass({

	getInitialState: function() {
		return {
			skills: []
		};
	},

	componentDidMount: function() {
		$.get("http://localhost:3000/getLoggedInUserDetails", function (result) {
			var userInfo = result.user;
			var skillSplit = [];
			if (userInfo.skills) {
				skillSplit = userInfo.skills.split(",");
			}
			var skillObjects = [];
			for (var i = 0; i < skillSplit.length; i++) {
				var skillToPush = {text: skillSplit[i], key: i};
				skillObjects.push(skillToPush);
			}
			this.setState({
				skills: skillObjects
			});
			console.log(this.state.skills);
		}.bind(this));
	},

	addSkill: function(e) {
		var skillArray = this.state.skills;
		console.log(skillArray);

		if (this._inputElement.value) {
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
		}

		this._inputElement.value = "";

		e.preventDefault();
	},

	submitUserUpdate: function(event) {
		event.preventDefault();
		var skillArray = this.state.skills;
		var skillParam = formatSkills(skillArray);
		var updateUrl = "http://localhost:3000/updateUserSkills?skills=" + skillParam;
		console.log(updateUrl);

		if (this.state.skills.length <= 2) {
			alert("Whoops, it looks like you haven't entered at least 3 of your top skills!")
		} else {
				$.get(updateUrl, function (result) {
			}
		)}
	},

  	render: function() {
    	return (
	    	<div>
				<nav className="panel" id="skillsPanel">
				  	<p className="panel-heading">
				    	Show us your skills
				  	</p>
				  	<form onSubmit={this.addSkill}>
						<p className="panel-block control has-addons">
							<input ref={(a) => this._inputElement = a} className="input is-expanded is-medium is-orange" type="text" placeholder="Ex. JavaScript" />
							<button type="submit" className="button is-medium is-orange">
								Add
							</button>
						</p>
					</form>

					<SkillsList entries={this.state.skills} />

				  	<div className="panel-block">
				    	<a to="/main" onClick={this.submitUserUpdate} className="button is-blue is-fullwidth">
				      		<p>Submit</p>
				    	</a>
				  	</div>

				</nav>
	    </div>
	    )
	}
});

export default SkillsForm;
