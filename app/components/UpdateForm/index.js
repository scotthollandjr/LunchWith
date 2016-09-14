import React from 'react';
// import * as userService from '../../services/user-service';
import SkillsForm from '../SkillsForm';
var Router = require('react-router');
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

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
    $.get("/getLoggedInUserDetails", function (result) {
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
		var updateUrl = "/updateUserDetails?firstname=" + this.state.firstName + "&lastname=" + this.state.lastName + "&company=" + this.state.company + "&title=" + this.state.title + "&bio=" + this.state.bio;
		console.log(updateUrl);
		$.get(updateUrl, function (result) {
		}
	)},

	onMapCreated(map) {
		const {Gmaps} = this.refs;

		const coords = {
			lat: this.state.centerLat,
			lng: this.state.centerLng};
	},

	onClick: function(location) {
		var latty = location.latLng.lat();
		var longy = location.latLng.lng();
		console.log("old: " + this.state.latitude + ", " + this.state.longitude);
		this.setState({
			longitude: longy,
			latitude: latty
		});
		console.log("new: " + this.state.latitude + ", " + this.state.longitude);

		var centerCircle = new google.maps.Circle({
			map: Gmaps,
			center: {lat: this.state.latitude, lng: this.state.longitude},
			radius: 25,
			fillColor: '#09c7ed',
			fillOpacity: .75,
			strokeColor: '#09c7ed',
			strokeOpacity: .25,
			strokeWeight: 10
		});
	},


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
					<div id="update-map">
						<Gmaps
							ref='Gmaps'
							width={'100%'}
							height={'100%'}
							lat={this.state.latitude}
							lng={this.state.longitude}
							zoom={15}
							disableDefaultUI={true}
							loadingMessage={'Be happy'}
							onClick={this.onClick}
							params={{v: '3.exp', key: 'AIzaSyCJa4qHOKLW1eYexkJr2WLQ5I24xyqP-5E'}}
							onMapCreated={this.onMapCreated}>
						</Gmaps>
					</div>
					<button className="button is-medium is-orange" onClick={this.submitUserUpdate}>
						<p>Update</p>
					</button>
				</form>
	    </div>
	  )
	}
});

export default UpdateForm;
