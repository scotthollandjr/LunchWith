import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
	lat: 45.527129,
	lng: -122.683163,
};

const userInfo = {
	lat2: 45.519530,
	lng2: -122.678061,
	firstName: "Scout",
	lastName: "Rodriguez",
	title: "Junior Developer",
	company: "Tacocat Industries",
	skills: ["Java", "Android", "Googling"]
};

var GoogleMap = React.createClass({
  onMapCreated() {
    const {Gmaps} = this.refs;
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

  	onClick(e) {
    	console.log('onClick', e);
  	},

  render() {
    return (
        <Gmaps
        	ref='Gmaps'
	        width={'100vh'}
	        height={'100vh'}
	        lat={userInfo.lat2}
	        lng={userInfo.lng2}
	        zoom={15}
	        loadingMessage={'Be happy'}
	        params={{v: '3.exp', key: 'AIzaSyCJa4qHOKLW1eYexkJr2WLQ5I24xyqP-5E'}}
	        onMapCreated={this.onMapCreated}>
	        <Circle
	          lat={userInfo.lat2}
	          lng={userInfo.lng2}
	          radius={25}
	          fillColor={'#ff8528'}
	          fillOpacity={.65}
	          strokeColor={'#ff8528'}
	          strokeOpacity={.25}
	          strokeWeight={10}
	          onClick={this.onClick} />
	    </Gmaps>
    );
  }

});

export default GoogleMap;
