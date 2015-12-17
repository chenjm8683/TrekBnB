var React = require('react');
var RoomStore = require('../stores/roomStore.js');
var RoomAction = require('../actions/roomAction.js');

var List = require('./searchIndexComponents/list.jsx');
var Map = require('./searchIndexComponents/map.jsx');




var SearchIndex = React.createClass({

  getInitialState: function() {
    return({
      rooms: RoomStore.all()
    });
  },


  _updateRooms: function() {
    this.setState({
      rooms: RoomStore.all()
    })
  },

  componentWillUnmount: function() {
    this.searchToken.remove();
  },

  componentDidMount: function() {
    this.searchToken = RoomStore.addListener(this._updateRooms);
    RoomAction.fetchAllRooms();
  },

  render: function() {
    return (
      <div className="container-fluid below-nav" id="sidx">
        <div className="row" id="list-map-row">
          <div className="col-xs-7" id="sidx-left">
            <div className="row">
              <h2>Search Filter</h2>
            </div>
            <div className="row">
              <h2>Search Result</h2>
              <List rooms={this.state.rooms} />
            </div>

          </div>
          <div className="col-xs-5 map">
            <Map />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchIndex;
