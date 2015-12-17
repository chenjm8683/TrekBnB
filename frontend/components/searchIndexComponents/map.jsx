var React = require('react');
var RoomAction = require('../../actions/roomAction.js');
var ReactDOM = require('react-dom');
var RoomStore = require('../../stores/roomStore.js');

var Map = React.createClass({


  _updateMarkers: function() {

  },

  _registerGoogleMapsListener: function() {
    var _map = this.map;
    google.maps.event.addListener(_map, 'idle', function() {
      var bounds = _map.getBounds();
      var latLngBounds = {
        northEast: {
          lat: bounds.getNorthEast().lat(),
          lng: bounds.getNorthEast().lng()
        },
        southWest: {
          lat: bounds.getSouthWest().lat(),
          lng: bounds.getSouthWest().lng()
        }
      };
      console.log(latLngBounds);
    });
  },

  componentDidMount: function() {
    var map = ReactDOM.findDOMNode(this.refs.searchmap);
    var mapOptions = {
      // need to change to reflect searched location
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);
    this.mapToken = RoomStore.addListener(this._updateMarkers);
    this._registerGoogleMapsListener();
  },

  render: function() {
    return (
      <div
         ref='searchmap'
         className="google-map-canvas"
         id="search-map-canvas">
      </div>
    )
  }
});

module.exports = Map;
