var React = require('react');
var ListItemImage= require('./listItemImage.jsx');
var ListItemBody = require('./listItemBody.jsx');




var ListItem = React.createClass({

  handleClick: function() {
    // render roomIndex
    var roomId = this.props.room.id;
    this.props.history.pushState(null, "/rooms/" + roomId);
  },

  render: function() {
    var room = this.props.room;
    return(
      <div className="col-xs-12 col-sm-6 row-space-2">
        <div
          className="container-fluid cursor-pointer"
          onClick={this.handleClick}
          id={"room-" + room.id}>
          <ListItemImage room={room} />
          <ListItemBody room={room} />
        </div>
      </div>
    );
  }
});

module.exports = ListItem;
