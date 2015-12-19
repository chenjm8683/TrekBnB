var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
// var ReactRouter = require('react-router');
// var History = require('react-router').History;
var DropDown = require('./landingSearchBarDropDown.jsx');

var LandingSearchBar = React.createClass({
  // mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      loc: "",
      placeholder: "Where do you want to go?"
    });
  },


  handleSearch: function(e) {
    // e.preventDefault();

    // may use History mixins;
    // this.history.pushState(null, 'search/' + this.state.loc)
    // debugger;

    if (this.state.loc === ""){
      this.setState({
        placeholder: "Please set location"
      });
    } else {
      var loc = this.state.loc.replace(/\W+/g, "-");
      console.log("pushStatefromsearch")
      this.props.history.pushState(null, 'search/' + loc)
    }

  },

  handleLocChange: function(e) {
    // console.log(this.refs.locinput.value);
    this.setState({
      loc: this.refs.locinput.value
    });
    // autocomplete: needs to add a delay using setTimeout and clearTimeout to cancel if the user changes before timeout expires
  },

  render: function() {
    var org1 = (
      <div>
        <form className="form-horizontal" role="form" onSubmit={this.handleSearch}>
          <div className="input-group input-group-lg">
            <input
               type="text"
               className="form-control"

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
                <input
                   type="text"
                   className="form-control"
                   onChange={this.handleLocChange}
                   placeholder={this.state.placeholder}
                   ref="locinput"/>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.handleSearch}>Search</button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

    var showAutocomplete = (this.state.loc !== "");
    return (
      <div className="col-xs-12" id="landing-search-bar">
        {design2}
        {showAutocomplete ? <DropDown
                              locinput={this.refs.locinput}
                              handleSearch={this.handleSearch}
                              handleLocChange={this.handleLocChange}/> : "" }
      </div>
    );
  }
});

module.exports = LandingSearchBar;
