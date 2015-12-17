var React = require('react');

var ListItemImage = React.createClass({

  render: function() {
    return (
      <div className="list-item-image">
        <img
          src="/assets/rooms/51557_0.jpg"
          className="img-responsive">
        </img>
      </div>
    )
  }
});

module.exports = ListItemImage;
