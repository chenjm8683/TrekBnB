var React = require('react');

var ListItemBody = React.createClass({
  // componentWillReceiveProps: function(newProps) {
  //   debugger;
  // },

  render: function(){
    // debugger;
    return (
      <div className="list-item-body">
        <div className="body-container">
          <h3
            title={this.props.room.title}
            className="listing-name text-truncate row-space-top-1">
              {this.props.room.title}
          </h3>
          <div className="text-muted listing-location text-truncate">
            <span>
              <h5>
              {this.props.room.type_string}
              </h5>
            </span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ListItemBody;
