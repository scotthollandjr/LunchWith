import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const userInfo = {
	lat2: 45.519530,
	lng2: -122.678061,
	firstName: "Scout",
	lastName: "Rodriguez",
	title: "Junior Developer",
	company: "Tacocat Industries",
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
		summary: "I am starting a start-up and looking to find out about the local tech scene!",
		skills: ["Java", "Android", "Googling"]
	},
	user2: {
		coords: {lat: 45.519530, lng: -122.678061},
		firstName: "Wolfie",
		lastName: "Kyleson",
		title: "Intern",
		company: "EyeCue Lab",
		summary: "Looking to find out more about company culture in this area.",
		skills: ["postgres", "Ruby on Rails", "React"]
	},
	user3: {
		coords: {lat: 45.526636, lng: -122.685553},
		firstName: "Appa",
		lastName: "Sunflower",
		title: "Software Engineer",
		company: "Nike",
		summary: "I'm trying to get into mobile development, and looking for pointers.",
		skills: ["JavaScript", "Node.js", "mongoDB"]
	},
	user4: {
		coords: {lat: 45.527439, lng: -122.677932},
		firstName: "Brunch",
		lastName: "Ann",
		title: "Web Designer",
		company: "Cozy",
		summary: "Let's be honest, I'm looking for free lunch.",
		skills: ["CSS", "HTML", "JavaScript"]
	},
	user5: {
		coords: {lat: 45.532971, lng: -122.681966},
		firstName: "Peaches",
		lastName: "McGee",
		title: "UX Designer",
		company: "Cat Stevens, Inc.",
		summary: "I am new to town, and looking to meet potential business partners for my ..ventures.",
		skills: ["Adobe", "Design", "CSS"]
	},
}

var GoogleMap = React.createClass({

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

		for (var user in users) {
			var userCircle = new google.maps.Circle({
				map: map,
				center: users[user].coords,
				radius: 20,
				fillColor: '#ff8528',
				fillOpacity: .75,
				strokeColor: '#ff8528',
				strokeOpacity: .25,
				strokeWeight: 10,
				firstName: users[user].firstName,
				lastName: users[user].lastName,
				title: users[user].title,
				summary: users[user].summary,
				onClick: this.onClick
			});

			var infowindow = new google.maps.InfoWindow({
				content: userCircle.firstName
			});

			userCircle.addListener('click', function() {
				document.getElementById("userPanel").style.height = "40%";
				document.getElementById("footer").style.display = "none";
				document.getElementById("panel-name").textContent = this.firstName + ' ' + this.lastName;
				document.getElementById("panel-title").textContent = this.title;
				document.getElementById("panel-summary").textContent = this.summary;
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
  },

	onCloseClick() {
  	console.log('onCloseClick');
	},

	onClick() {
		document.getElementById("userPanel").style.height = "0%";
		document.getElementById("footer").style.display = "";
	},

  render() {
    return (
				<div>
	        <Gmaps
	        	ref='Gmaps'
		        width={'100vh'}
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
				<div id="userPanel" className="overlay">
					<div className="overlay-content">
						<p id="panel-name" className="title panel-text"></p>
						<p id="panel-title" className="title panel-text"></p>
						<p id="panel-summary" className="panel-text"></p>
						<div className="panel-footer">
							<span className='icon is-large'>
								<i className="fa fa-angle-up"></i>
							</span>
							<p>FULL PROFILE</p>
						</div>
					</div>
				</div>
			</div>
    );
  }

});

export default GoogleMap;
