import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const userInfo = {
	latitude: 45.519530,
	longitude: -122.678061,
	firstName: "Scout",
	lastName: "Rodriguez",
	title: "Junior Developer",
	company: "Tacocat Industries",
	imageUrl: "https://case.edu/medicine/admissions/media/school-of-medicine/admissions/classprofile.png",
	summary: "I am new to town, and looking to meet potential business partners for my ..ventures.",
	skills: ["Java", "Android", "Googling"]
};

var users = {
	user1: {
		coords: {lat: 45.527129, lng: -122.678061},
		firstName: "Scout",
		lastName: "Rodriguez",
		title: "Junior Developer",
		company: "Tacocat Industries",
		imageUrl: "https://cdn1.lockerdome.com/uploads/7451336eb852ba74c9dd7af45b6aa0cd9ef199d72d6698212f8993f300c8c8c1_large",
		summary: "I am starting a start-up and looking to find out about the local tech scene!",
		skills: ["Java", "Android", "Googling"]
	}
};

var superUser = {
	firstName: "",
	lastName: "",
	title: "",
	company: "",
	imageUrl: "",
	summary: "",
	skills: [],
	databaseId: 0
}

var GoogleMap = React.createClass({

	getInitialState:function() {
		return {
			users: [],
			myLatLng: {lat: userInfo.latitude, lng: userInfo.longitude},
			map: "mappity"
		};
	},

	componentDidMount: function() {

	},

  onMapCreated(map) {
		const {Gmaps} = this.refs;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				map.setCenter({
					lat: position.coords.latitude,
					lng: position.coords.longitude
				});
				var centerCircle = new google.maps.Circle({
					map: map,
					center: {lat: position.coords.latitude, lng: position.coords.longitude},
					radius: 25,
					fillColor: '#09c7ed',
					fillOpacity: .75,
					strokeColor: '#09c7ed',
					strokeOpacity: .25,
					strokeWeight: 10,
					onClick: this.onClick
				});
			});
		}

    Gmaps.getMap().setOptions({
      styles: [
		  {
		    "featureType": "landscape.man_made",
		    "stylers": [
		      { "color": "#4b4b4b" }
		    ]
		  },{
		    "featureType": "landscape.natural",
		    "stylers": [
		      { "color": "#5f5f5f" }
		    ]
		  },{
		    "featureType": "administrative",
		    "stylers": [
		      { "color": "#5f5f5f" }
		    ]
		  },{
		    "featureType": "administrative",
		    "elementType": "labels.icon",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "elementType": "labels.text.fill",
		    "stylers": [
		      { "color": "#ebebeb" }
		    ]
		  },{
		    "featureType": "water",
		    "stylers": [
		      { "color": "#808080" }
		    ]
		  },{
		    "featureType": "transit",
		    "elementType": "labels",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "featureType": "transit.line",
		    "stylers": [
		      { "color": "#333333" }
		    ]
		  },{
		    "featureType": "road",
		    "stylers": [
		      { "color": "#333333" }
		    ]
		  },{
		    "featureType": "road.highway",
		    "stylers": [
		      { "color": "#3d3d3d" }
		    ]
		  },{
		    "elementType": "labels.text.fill",
		    "stylers": [
		      { "color": "#ebebeb" }
		    ]
		  },{
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      { "color": "#000000" }
		    ]
		  },{
		    "featureType": "poi",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "featureType": "transit.station.airport",
		    "stylers": [
		      { "color": "#4b4b4b" }
		    ]
		  },{
		  }
		]
      });

			var locationQueryString = "?latitude=" + userInfo.latitude + "&longitude=" + userInfo.longitude;
			$.get("/queryUsers"+locationQueryString, function(result) {
				// console.log("Location searched!", result.users);
				var users = result.users
				for (var i = 0; i < users.length; i++) {
					var user = users[i];
					var userLatLng = {lat: user.latitude, lng: user.longitude}
					var skills;
					 if (user.skills) {
						 skills = user.skills.split(",");
					 } else {
						 skills = ["no", "skills", "provided"];
					 }
					var userCircle = new google.maps.Circle({
						map: map,
						center: userLatLng,
						radius: 20,
						fillColor: '#ff8528',
						fillOpacity: .75,
						strokeColor: '#ff8528',
						strokeOpacity: .25,
						strokeWeight: 10,
						firstName: user.firstname,
						lastName: user.lastname,
						title: user.title,
						company: user.company,
						imageUrl: user.pictureurl,
						summary: user.summary,
						skills: skills,
						databaseId: user.id,
						onClick: this.onClick
					});
					userCircle.addListener('click', function() {
						superUser = {
							firstName: this.firstName,
							lastName: this.lastName,
							title: this.title,
							company: this.company,
							imageUrl: this.imageUrl,
							summary: this.summary,
							skills: this.skills || ["no", "skills", "listed"],
							databaseId: this.databaseId
						};
							document.getElementById("halfPanel").style.height = "35%";
							document.getElementById("footer").style.display = "none";
							document.getElementById("panel-name").textContent = superUser.firstName + ' ' + superUser.lastName;
							document.getElementById("panel-title").textContent = superUser.title;
							document.getElementById("panel-summary").textContent = superUser.summary;
							document.getElementById("full-image").src = superUser.imageUrl;
							window.messageRecipient = superUser.databaseId;
							console.log(superUser.databaseId)
					})
				}
			});
  },

	onCloseClick() {
  	console.log('onCloseClick');
	},

	onClick() {
		document.getElementById("halfPanel").style.height = "0%";
		document.getElementById("fullPanel").style.height = "0%";
		document.getElementById("footer").style.display = "";
	},

	fullProfile() {
		document.getElementById("fullPanel").style.height = "100%";
		document.getElementById("halfPanel").style.height = "0%";
		document.getElementById("full-name").textContent = superUser.firstName + ' ' + superUser.lastName;
		document.getElementById("full-title").textContent = superUser.title + ' at ' + superUser.company;
		document.getElementById("full-skills").textContent = 'Skills: ' + superUser.skills[0] + ', ' + superUser.skills[1] + ' & ' + superUser.skills[2];
		document.getElementById("full-summary").textContent = superUser.summary;
	},

	composeMessage() {
		document.getElementById("fullPanel").style.height = "0%";

	},

  render() {
    return (
			<div id="map">
        <Gmaps
        	ref='Gmaps'
	        width={'100vw'}
	        height={'100vh'}
	        lat={0}
	        lng={0}
	        zoom={15}
					disableDefaultUI={true}
	        loadingMessage={'Be happy'}
					onClick={this.onClick}
	        params={{v: '3.exp', key: 'AIzaSyCJa4qHOKLW1eYexkJr2WLQ5I24xyqP-5E'}}
	        onMapCreated={this.onMapCreated}>
		    </Gmaps>
				<div id="halfPanel" className="overlay">
					<div className="overlay-content">
						<p id="panel-name" className="title panel-text"></p>
						<p id="panel-title" className="title panel-text"></p>
						<p id="panel-summary" className="panel-text"></p>
					</div>
					<div className="footer-arrow">
						<span className="icon is-large panel-footer">
							<i onClick={this.fullProfile} className="fa fa-angle-up" />
						</span>
					</div>
				</div>
				<div id="fullPanel" className="overlay2">
					<div className="overlay-content">
						<img src={superUser.imageUrl} id="full-image" />
						<p id="full-name" className="title panel-text"></p>
						<p id="full-title" className="title panel-text"></p>
						<p id="full-skills" className="title panel-text"></p>
						<p id="full-summary" className="panel-text"></p>
						<button id="connect-button" onClick={this.composeMessage} className="button is-blue">CONNECT</button>
					</div>
					<div className="footer-arrow">
						<span className="icon is-large panel-footer">
							<i onClick={this.onClick} className="fa fa-angle-down" />
						</span>
					</div>
				</div>
				<div id="messageForm" className="overlay2">
					<div className="overlay-content">
						<p className="control">
							<textarea className="textarea" defaultValue="Hello! I would like to meet up."></textarea>
						</p>
						<p>Im available to meet up on:</p>
						<p className="control">
							<label className="radio">
								<input type="radio" name="meetDay"></input>
								Monday
							</label>
							<label className="radio">
								<input type="radio" name="meetDay"></input>
								Tuesday
							</label>
							<label className="radio">
						    <input type="radio" name="meetDay"></input>
						    Wednesday
						  </label>
						  <label className="radio">
						    <input type="radio" name="meetDay"></input>
						    Thursday
						  </label>
							<label className="radio">
						    <input type="radio" name="meetDay"></input>
						    Friday
						  </label>
						</p>
						<p>at:</p>
						<p className="control">
							<label className="radio">
								<input type="radio" name="meetTime"></input>
								11:00 AM
							</label>
							<label className="radio">
								<input type="radio" name="meetTime"></input>
								11:30 AM
							</label>
							<label className="radio">
								<input type="radio" name="meetTime"></input>
								12:00 PM
							</label>
							<label className="radio">
								<input type="radio" name="meetTime"></input>
								12:30 PM
							</label>
						</p>
						<button id="connect-button" onClick={this.sendMessage} className="button is-blue">SEND</button>
					</div>
					<div className="footer-arrow">
						<span className="icon is-large panel-footer">
							<i onClick={this.onClick} className="fa fa-angle-down" />
						</span>
					</div>
				</div>
			</div>
    );
  }
});

export default GoogleMap;
