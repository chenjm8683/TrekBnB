var React = require('react');
var RoomAction = require('../../actions/roomAction.js');
var ReactDOM = require('react-dom');
var RoomStore = require('../../stores/roomStore.js');
var FilterActions = require('../../actions/filterAction.js')

var Map = React.createClass({


  _updateMarkers: function() {
    // debugger;
    var markers = this.markers;
    var newRooms = RoomStore.all();
    var addRoomIds = Object.keys(newRooms).filter(function(roomId){
      return (typeof markers[roomId] === 'undefined');
    });
    var removeRoomIds = Object.keys(this.markers).filter(function(roomId){
      return (typeof newRooms[roomId] === 'undefined');
    });
    this._removeMarkers(removeRoomIds);
    this._addMarkers(addRoomIds, newRooms);
  },

  _removeMarkers: function(removeRoomIds) {
    var _markers = this.markers;
    removeRoomIds.forEach(function(roomId) {
      _markers[roomId].setMap(null);
      delete(_markers[roomId]);
    });
  },

  _addMarkers: function(addRoomIds, newRoomds) {
    var _markers = this.markers;
    var _map = this.map;
    addRoomIds.forEach(function(roomId) {
      var room = newRoomds[roomId]
      var pos = new google.maps.LatLng(room.lat, room.lng);
      _markers[roomId] = new google.maps.Marker({
        position: pos,
        map: _map
      });
    });
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
      // console.log(latLngBounds);
      FilterActions.updateBounds(latLngBounds);
    });
    this.mapToken = RoomStore.addListener(this._updateMarkers);
  },

  componentDidMount: function() {
    var map = ReactDOM.findDOMNode(this.refs.searchmap);
    var mapOptions = {
      // need to change to reflect searched location
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);
    this.markers = {};
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
