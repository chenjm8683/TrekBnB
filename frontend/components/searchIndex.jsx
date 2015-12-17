var React = require('react');
var ReactRouter = require('react-router');
var RoomStore = require('../stores/roomStore.js');
var RoomAction = require('../actions/roomAction.js');

var List = require('./searchIndexComponents/list.jsx');
var Map = require('./searchIndexComponents/map.jsx');
var JSLoaderStore = require('../stores/jsLoaderStore.js');



var SearchIndex = React.createClass({
  mixins: [ReactRouter.history],

  getInitialState: function() {
    return({
      rooms: RoomStore.all(),
      showMap: JSLoaderStore.isReady('gMaps')
    });
  },


  _updateRooms: function() {
    this.setState({
      rooms: RoomStore.all()
    });
    // debugger;
  },

  _updateMapsStatus: function() {
    this.setState({
      showMap: JSLoaderStore.isReady('gMaps')
    });

  },

  componentWillUnmount: function() {
    this.searchToken.remove();
    this.mapsReadyToken.remove();
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
          <div className="col-xs-12 col-md-7 search-result" id="sidx-left">
            <div className="row">
              <h2>Search Filter Placeholder</h2>
            </div>
            <div className="row search-list-result" >
              <h2>Search Result Header Placeholder</h2>
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
