var React = require('react');
var ListItemImage= require('./listItemImage.jsx');




var ListItem = React.createClass({

  handleClick: function() {
    // render roomIndex
    var roomId = this.props.room.id;
    this.props.history.pushState(null, "/rooms/" + roomId);
  },

  render: function() {
    var room = this.props.room;
    return(
      <div className="col-xs-12 col-sm-6 row-space-2 col-md-6">
        <div
          className="container-fluid cursor-pointer"
          onClick={this.handleClick}>
          <ListItemImage room={room}/>
          <div className="list-item-body">
            {this.props.room.id}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ListItem;
