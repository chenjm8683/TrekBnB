var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
// var ReactRouter = require('react-router');
// var History = require('react-router').History;

var LandingSearchBar = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      loc: "",
      placeholder: "Where do you want to go?"
    });
  },


  handleSearch: function(e) {
    e.preventDefault();

    // may use History mixins;
    // this.history.pushState(null, 'search/' + this.state.loc)
    // debugger;

    if (this.state.loc === ""){
      this.setState({
        placeholder: "Please set location"
      });
    } else {
      this.props.history.pushState(null, 'search/' + this.state.loc)
    }

  },

  render: function() {
    var org1 = (
      <div>
        <form className="form-horizontal" role="form" onSubmit={this.handleSearch}>
          <div className="input-group input-group-lg">
            <input
               type="text"
               className="form-control"
               valueLink={this.linkState("loc")}
               placeholder= {this.state.placeholder} />
            <span className="input-group-addon">@</span>
          </div>
          <button>Search</button>
        </form>
      </div>
    );

    var design1 = (
      <div className="col-xs-12" id="landing-search-bar">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
              <form  role="form" onSubmit={this.handleSearch}>
                <div className="input-group">
                  <input
                     type="text"
                     className="form-control"
                     valueLink={this.linkState("loc")}
                     placeholder= {this.state.placeholder} />
                   <span className="input-group-button">
                     <button className="btn btn-default" type="button">Search</button>
                   </span>
                </div>
              </form>
          </div>
        </div>
      </div>
    );

    var design2 = (
      <div className="col-xs-12">
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="col-xs-offset-2 col-xs-8">
              <form className="input-group" role="form">
                <input type="text" className="form-control" valueLink={this.linkState("loc")} placeholder={this.state.placeholder} />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.handleSearch}>Search</button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className="col-xs-12" id="landing-search-bar">
        {design2}
      </div>
    );
  }
});

module.exports = LandingSearchBar;
