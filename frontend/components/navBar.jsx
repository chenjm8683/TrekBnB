var React = require('react');

var NavBar = React.createClass({
  render: function() {
    var navBar1 = (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <a className="navbar-brand" href="#">TrekBnB</a>
            <button type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapsed"
                    data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar"
                    >
              <span className="sr-only">Toggle nagivation</span>
              <span className="icon-bar">test</span>
              <span className="icon-bar">test</span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div id="navbar" className="navbar-collapse collapse">

          </div>
        </div>
      </nav>
    );
    var navBar2 = (
      <nav className="navbar navbar-inverse navbar-fixed-top navbar-custom">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar"
                    >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img alt="TrekBnB" src="/assets/logo/trekbnb_logo_3.png" />
            </a>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
          </div>
        </div>
      </nav>
    );
    return(
      <div>
        {navBar2}
      </div>
    );
  }
});

module.exports = NavBar;
