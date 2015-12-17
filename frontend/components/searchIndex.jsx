var React = require('react');
var RoomStore = require('../stores/roomStore.js');
var RoomAction = require('../actions/roomAction.js');

var List = require('./searchIndexComponents/list.jsx');
var Map = require('./searchIndexComponents/map.jsx');
var JSLoaderStore = require('../stores/jsLoaderStore.js');



var SearchIndex = React.createClass({

  getInitialState: function() {
    return({
      rooms: RoomStore.all(),
      showMap: JSLoaderStore.isReady('gMaps')
    });
  },


  _updateRooms: function() {
    this.setState({
      rooms: RoomStore.all()
    })
  },

  _updateMapsStatus: function() {
    this.setState({
      showMap: JSLoaderStore.isReady('gMaps')
    });
  },

  componentWillUnmount: function() {
    this.searchToken.remove();
  },

  componentDidMount: function() {
    this.searchToken = RoomStore.addListener(this._updateRooms);
    RoomAction.fetchAllRooms();
    this.mapsReadyToken = JSLoaderStore.addListener(this._updateMapsStatus);
  },

  render: function() {
    console.log(this.state.showMap);
    return (
      <div className="container-fluid below-nav" id="sidx">
          <div className="col-xs-12 col-md-7 search-list" id="sidx-left">
            <div className="row">
              <h2>Search Filter</h2>
            </div>
            <div className="row">
              <h2>Search Result</h2>
              <List rooms={this.state.rooms} />
            </div>

          </div>
          <div className="col-md-5 search-map hidden-sm">
            {this.state.showMap ? <Map /> : ""}
          </div>
      </div>
    );
  }
});

module.exports = SearchIndex;
