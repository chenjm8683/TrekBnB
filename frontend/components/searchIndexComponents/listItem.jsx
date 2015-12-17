var React = require('react');
var ListItemImage= require('./listItemImage.jsx');




var ListItem = React.createClass({

  render: function() {
    return(
      <div className="col-xs-12 col-sm-6 row-space-2 col-md-6">
        <ListItemImage />
        <div className="list-item-body">
          {this.props.room.id}
        </div>
      </div>
    );
  }
});

module.exports = ListItem;
