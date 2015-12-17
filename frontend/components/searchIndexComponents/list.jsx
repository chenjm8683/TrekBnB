var React = require('react');
var ListItem = require('./listItem.jsx');

var List = React.createClass({



  render: function() {
    var rooms = this.props.rooms;
    var listItems = Object.keys(rooms).map(function(room_id) {
      return(<ListItem key={room_id} room={rooms[room_id]} />);
    });
    return (
      <div className="container-fluid search-list-frame">
        <div className="row">
          <div className="container-fluid search-list-listings">
            <div className="row">
              {listItems}
            </div>
          </div>

        </div>


      </div>
    );
  }



});

module.exports = List;
