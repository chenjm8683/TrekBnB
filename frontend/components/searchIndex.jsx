var React = require('react');
var RoomStore = require('../stores/roomStore.js');
var RoomAction = require('../actions/roomAction.js');





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

  componentDidMount: function() {
    this.searchToken = RoomStore.addListener(this._updateRooms);
    RoomAction.fetchAllRooms();
  },

  render: function() {
    return (
      <div>{Object.keys(this.state.rooms)}</div>
    );
  }
});

module.exports = SearchIndex;
