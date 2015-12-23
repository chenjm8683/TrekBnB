var React = require('react');
var RoomAction = require('../../actions/roomAction.js');
var ReactDOM = require('react-dom');
var RoomStore = require('../../stores/roomStore.js');
var FilterActions = require('../../actions/filterAction.js');
// var MarkerWithLabel = require('../../helpers/MarkerWithLabel.js');


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
    // debugger;

    setTimeout(this._changeLabelContent,1000);
    // google.maps.event.addListenerOnce(this.map, 'idle', this._changeLabelContent);
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
    var image = "/assets/markers/pink.png";
    var imageBlue = "/assets/markers/blue.png";
    var room, priceStr, pos;
    // var pinSymbol = function(color) {
    //   return {
    //       path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
    //       fillColor: color,
    //       fillOpacity: 1,
    //       strokeColor: '#000',
    //       strokeWeight: 2,
    //       scale: 2
    //   };
    // }


    addRoomIds.forEach(function(roomId) {
      room = newRoomds[roomId];
      priceStr = "$" + room.price.toString();
      pos = new google.maps.LatLng(room.lat, room.lng);
      _markers[roomId] = new google.maps.Marker({
        position: pos,
        map: _map,
        icon: {
          url: image,
          // size: new google.maps.Size(60, 60),
          scaledSize: new google.maps.Size(55, 35)
        },
        label: {
          text: " ",
          fontFamily: 'Roboto, Arial, sans-serif, custom-label-' + roomId
        }
      });
      // debugger;
      // $("[style*='custom-label-"+ roomId + "']")
      // google.maps.event.addDomListener(_map, 'domready', function(){
        // debugger;
        // console.log("markerready")
        // var label = ($("[style*='custom-label-"+ roomId + "']"))[0];
        // label.innerHTML = priceStr;
      // });
      var toggleBounce = function(marker, status) {
        if (status) {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        } else {
          marker.setAnimation(null);
        }
      };
      google.maps.event.addDomListener(document.getElementById('room-' + roomId),
                                      "mouseenter",
                                       function() {
        toggleBounce(_markers[roomId], true);
      });
      google.maps.event.addDomListener(document.getElementById('room-' + roomId),
                                      "mouseleave",
                                       function() {
        toggleBounce(_markers[roomId], false);
      });



    });
  },

  _changeLabelContent: function() {
    // debugger;
    var rooms = RoomStore.all();
    var labels = Array.prototype.slice.call($("[style*='custom-label']"));
    // label.innerHTML = priceStr;
    labels.forEach(function(label, idx) {
      var roomIdStr = label.getAttribute('style').match(/custom-label-(.*);/)[1];
      var priceStr = "$" + rooms[roomIdStr].price.toString();
      label.innerHTML = priceStr;
    });
    return (labels.length === 0);
    // var roomIdStr = labels[0].getAttribute('style').match(/custom-label-(.*);/)[1];
  },

  _registerGoogleMapsListener: function() {
    var _map = this.map;
    var updateBounds = this._updateFilterStoreBounds;
    // send initial bounds to FilterStore once fully loaded
    google.maps.event.addListenerOnce(_map, 'idle', updateBounds);
    // using dragend as the event
    // send updated bounds to FilterStore after each drag-end
    google.maps.event.addListener(_map, 'dragend', updateBounds);
    // google.maps.event.addListener(_map, 'idle', this._changeLabelContent)
  },

  _updateFilterStoreBounds: function() {
    var bounds = this.map.getBounds();
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
    FilterActions.updateBounds(latLngBounds);
  },


  _initializeMaps: function(centerLatLng) {
    this.currentCenter = centerLatLng;
    var mapEl = ReactDOM.findDOMNode(this.refs.searchmap);
    var mapOptions = {
      center: centerLatLng,
      zoom: 12
    };
    this.map = new google.maps.Map(mapEl, mapOptions);
    this._registerGoogleMapsListener();
    this.markers = {};
  },

  componentDidMount: function() {
    // console.log("mapCompMounted");
    this._initializeMaps(this.props.centerLatLng);
    this.mapToken = RoomStore.addListener(this._updateMarkers);
  },

  componentWillReceiveProps: function(newProps) {
    var newCenter = newProps.centerLatLng;
    // if the new center is the same, do nothing
    if (!this._isSameCoord(this.currentCenter, newCenter)) {
      // console.log("isnotsamecoord");
      this.map.setCenter(newCenter);
      this.currentCenter = newCenter;
      this._updateFilterStoreBounds();
    }
  },

  _isSameCoord: function(coord1, coord2) {
    // console.log("isSamecoord?");
    return (coord1.lat === coord2.lat && coord1.lng === coord2.lng);
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
