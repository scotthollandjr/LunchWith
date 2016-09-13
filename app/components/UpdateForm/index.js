import React from 'react';
// import * as userService from '../../services/user-service';
import SkillsForm from '../SkillsForm';
var Router = require('react-router');

var UpdateForm = React.createClass({

	getInitialState: function() {
		return {
			firstName: "firstname",
			lastName: "lastname",
			company: "Initial company state",
			title: "title",
			bio: "bio"
		};
	},

	handleFirstNameChange: function(e) {
		this.setState({firstName: e.target.value});
	},

	handleLastNameChange: function(e) {
		this.setState({lastName: e.target.value});
	},

	handleCompanyChange: function(e) {
		this.setState({company: e.target.value});
	},

	handleTitleChange: function(e) {
		this.setState({title: e.target.value});
	},

	handleBioChange: function(e) {
		this.setState({bio: e.target.value});
	},

	componentDidMount: function() {
    $.get("http://localhost:3000/getLoggedInUserDetails", function (result) {
      var userInfo = result.user;
      this.setState({
				firstName: userInfo.firstname,
				lastName: userInfo.lastname,
        company: userInfo.company,
				title: userInfo.title,
				bio: userInfo.bio
      });
    }.bind(this));
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

	submitUserUpdate: function(event) {
		event.preventDefault();
		var updateUrl = "http://localhost:3000/updateUserDetails?firstname=" + this.state.firstName + "&lastname=" + this.state.lastName + "&company=" + this.state.company + "&title=" + this.state.title + "&bio=" + this.state.bio;
		console.log(updateUrl);
		$.get(updateUrl, function (result) {
		}
	)},

	render: function() {
		return (
	  	<div>
			  <form onSubmit={this.updateInfo}>
					<p className="control">
						<input className="input" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange}/>
					</p>
					<p className="control">
						<input className="input" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange}/>
					</p>
					<p className="control">
						<input className="input" placeholder="Company" value={this.state.company} onChange={this.handleCompanyChange}/>
					</p>
					<p className="control">
						<input className="input" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange}/>
					</p>
					<p className="control">
						<textarea className="textarea" placeholder="Bio" value={this.state.bio} onChange={this.handleBioChange}></textarea>
					</p>
					<p className="panel-block control has-addons">
						<input ref={(a) => this._inputElement = a} className="input is-expanded is-medium is-orange" type="text" placeholder="Ex. JavaScript" />
						<button type="submit" className="button is-medium is-orange">
							Add
						</button>
					</p>
					<button className="button is-medium is-orange" onClick={this.submitUserUpdate}>
						<p>Update</p>
					</button>
				</form>
	    </div>
	  )
	}
});

export default UpdateForm;
