import React from 'react';
var Router = require('react-router');
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

var smap;
var smarkers = [];

var SkillsList = React.createClass({

	render: function() {
		var skillEntries = this.props.entries;

		function createSkill(skill) {

			function clickThing(text) {
				return function(e) {
					console.log("inside clickthing:function ", text);
				}
			}

			return (
				<p key={skill.key} className="panel-block" href="#">
				    {skill.text}
				    <span className="panel-icon is-right">
				      	<i onClick={clickThing(skill.text)} className="fa fa-trash"></i>
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
	console.log("skill string inside format skill", skillString);
	return skillString;
}

var SkillsForm = React.createClass({

	getInitialState: function() {
		return {
			skills: []
		};
	},

	componentDidMount: function() {
		this.userLatitude = "45.526943";
		this.userLongitude = "-122.684112";
		$.get("/getLoggedInUserDetails", function (result) {
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
		if (skillArray.length > 5) {
			skillArray.shift();
		}

		this._inputElement.value = "";

		e.preventDefault();
	},

	render: function() {
  	return (
    	<div id="skillsform-div">
				<p className="panel-block control has-addons">
					<input ref={(a) => this._inputElement = a} className="input is-expanded is-medium is-orange" type="text" placeholder="Ex. JavaScript" />
					<button type="submit" onClick={this.addSkill} className="button is-medium is-orange">
						Add
					</button>
				</p>

				<SkillsList entries={this.state.skills} />

	    </div>
    )
	}
});

var UpdateForm = React.createClass({

	getInitialState: function() {
		return {
			firstName: "firstname",
			lastName: "lastname",
			company: "Initial company state",
			title: "title",
			bio: "bio",
			latitude: "45.526943",
			longitude: "-122.684112",
			hideMyLocation: false
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

	handleCheckChange: function(e) {
		this.setState({hideMyLocation: e.target.checked});
	},

	componentDidMount: function() {
    $.get("/getLoggedInUserDetails", function (result) {
      var userInfo = result.user;
			if (userInfo.latitude) {
				this.setState({
					hideMyLocation: false
				});
			}
			var bio = userInfo.bio.replace(/<br \/>/g, "\n");
      this.setState({
				firstName: userInfo.firstname,
				lastName: userInfo.lastname,
        company: userInfo.company,
				title: userInfo.title,
				bio: bio,
				userLatitude: userInfo.latitude,
				userLongitude: userInfo.longitude
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


	deleteSkill: function(skill) {
		console.log(skill);
	},

	submitUserUpdate: function(event) {
		event.preventDefault();
		var bio = this.state.bio;
		bio = bio.replace(/(?:\r\n|\r|\n)/g, "<br />")
		console.log(bio);
		var updateUrl = "/updateUserDetails?firstname=" + this.state.firstName + "&lastname=" + this.state.lastName + "&company=" + this.state.company + "&title=" + this.state.title + "&bio=" + bio;
		console.log(updateUrl);
		$.get(updateUrl, function (result) {
		}
	)},

	submitUserLocationUpdate: function(event) {
		event.preventDefault();
		var updateUrl;
		if (this.state.hideMyLocation){
			updateUrl = "/updateUserLocationDetails?latitude=NULL&longitude=NULL";
		} else {
			updateUrl = "/updateUserLocationDetails?latitude=" + this.userLatitude + "&longitude=" + this.userLongitude;
		}
		console.log(updateUrl);
		$.get(updateUrl, function (result) {
		}
	)},

	onMapCreated(map) {
		smap = map;
		var centerMarker = new google.maps.Marker();
		this.setState({
			centerMarker: centerMarker
		})

		const {Gmaps} = this.refs;

		const coords = {
			lat: this.state.centerLat,
			lng: this.state.centerLng
		};
		map.addListener('click', function() {
			//update center
			//toss a query in thur

			// alert("click");

		})
		map.addListener('dragend', function() {
			//update center
			//toss a query in thur
			// alert("dragend");


		})
	},

	updateCenter: function() {

		alert('update center');
	},

	onClick: function(location) {
		var latty = location.latLng.lat();
		var longy = location.latLng.lng();

		console.log("old: " + this.userLatitude + ", " + this.userLongitude);
		this.userLatitude = latty;
		this.userLongitude = longy;

		console.log("new: " + this.state.latitude + ", " + this.state.longitude);

		this.state.centerMarker.setMap(null);

		this.state.centerMarker = new google.maps.Marker({
			map: smap,
			position: {lat: latty, lng: longy}
		});
		console.log("new: " + this.userLatitude + ", " + this.userLongitude);
	},


	render: function() {
		return (
	  	<div id="update-form">
				<h1 className="title white is-3">Update your account info:</h1>
		  	<div className="textAreaDiv">
				  <form onSubmit={this.updateInfo}>
						<div className="panel-block">
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
						</div>
						<div className="panel-block control has-addons">
							<SkillsForm />
						</div>
						<div className="panel-block control">
							<div id="update-map">
								<Gmaps
									ref='Gmaps'
									width={'100%'}
									height={'100%'}
									lat={this.state.latitude}
									lng={this.state.longitude}
									zoom={15}
									disableDefaultUI={true}
									clickableIcons={false}
									loadingMessage={'Be happy'}
									onClick={this.onClick}
									params={{v: '3.exp', key: 'AIzaSyCJa4qHOKLW1eYexkJr2WLQ5I24xyqP-5E'}}
									onMapCreated={this.onMapCreated}>
								</Gmaps>
							</div>
						</div>
						<div className="panel-block control">
							<p>We value your privacy and encourage you to choose a location in an area you are comfortable meeting other users. If you prefer to hide your profile entirely, just keep in mind that you will not appear to other users looking to meet-up. Hide your profile: <input type="checkbox" checked={this.state.hideMyLocation} onChange={this.handleCheckChange}/>
							</p>
						</div>
						<button className="button is-medium is-blue" onClick={this.submitUserUpdate}>
							<p>Update</p>
						</button>
						<button className="button is-medium is-blue" onClick={this.submitUserLocationUpdate}>
							<p>Update Location</p>
						</button>
					</form>
		    </div>
			</div>
	  )
	}
});

export default UpdateForm;
