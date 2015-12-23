var React = require('react');
var FilterStore = require('../../stores/filterStore.js');
var FilterActions = require('../../actions/filterAction.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var DateTools = require('../../helpers/date.js');

var SearchForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    this.initializeDateBounds();
    var dates = FilterStore.currentDates();
    return ({
      checkin: dates.checkin,
      checkout: dates.checkout,
      guests: FilterStore.currentGuests(),
      focus: (dates.checkin === null ? "checkin" : null)
    })
  },

  initializeDateBounds: function() {
    this.minCheckin = DateTools.todayStr();
    this.maxCheckin = DateTools.yearsAfterDateStr(3, this.minCheckin);
    this.minCheckout = DateTools.nextDayStr(this.minCheckin);
    this.maxCheckout = DateTools.nextDayStr(this.maxCheckin);
    // debugger;
  },

  updateParams: function() {
    var dates = FilterStore.currentDates();
    this.setState({
      checkin: dates.checkin,
      checkout: dates.checkout,
      guests: FilterStore.currentGuests(),
      focus: null
    });
  },

  // need to refactor: 1. validate date format, 2. validate checkin<checkout
  updateCheckin: function(dateStr) {
    var checkin = this.validateCheckin(dateStr);
    // debugger;
    if (this.state.checkout !== null
       && DateTools.compareDates(checkin, this.state.checkout) === -1) {
        this.setState({
          checkin: checkin
        });
        this.updateDates();
    } else {
      this.setState({
        checkin: checkin,
        checkout: null,
        focus: "checkout"
      });
    }
  },

  updateCheckout: function(dateStr) {
    // debugger;
    var checkout = this.validateCheckout(dateStr);
    if (this.state.checkin !== null
       && DateTools.compareDates(this.state.checkin, checkout) === -1) {
        this.setState({
          checkout: checkout
        });
        this.updateDates();
    } else {
      this.setState({
        checkin: null,
        checkout: checkout,
        focus: "checkin"
      });
    }
  },

  validateCheckin: function(dateStr) {
    if (DateTools.inclBetween(dateStr, this.minCheckin, this.maxCheckout)) {
      return dateStr;
    } else {
      return this.defaultCheckin;
    }
  },

  validateCheckout: function(dateStr) {
    if (DateTools.inclBetween(dateStr, this.minCheckin, this.maxCheckout)) {
      return dateStr;
    } else {
      return this.defaultCheckout;
    }
  },

  updateDates: function(checkin, checkout) {
    FilterActions.updateDates({
      checkin: this.state.checkin,
      checkout: this.state.checkout
    })
  },

  updateGuests: function() {
    FilterActions.updateGuests(this.state.guests);
  },

  // registerOnBlur: function(e) {
  //   e.currentTarget.onBlur(this.updateCheckin);
  // },

  loadDatePicker: function(checkin, checkout) {
    // need to refactor
    var _this = this;
    if (arguments.length === 0) {
      var checkin = "0";
      var checkout = "+1d";
    } else if (checkin !== null && checkout === null) {
      // var checkoutDate = new Date(checkin);
      // checkoutDate.setDate(checkoutDate.getDate() + 1);
      // checkout = ((checkoutDate.getMonth() + 1) + '/'
      //           + checkoutDate.getDate() + '/'
      //           + checkoutDate.getFullYear());
      // checkout = (Date.parse(checkin) - this.minCheckin) / 86400000 + 1
      // console.log(checkout);
      var checkout = new Date(Date.parse(checkin) + 86400000);
      // var minCheckout =
    }
    $("#search-index-checkin").datepicker({
      minDate: "0",
      defaultDate: checkin,
      changeMonth: true,
      onClose: function(checkinDate) {
        // console.log("checkin"+ checkinDate);
        _this.updateCheckin(checkinDate);

        // $('#search-index-checkout').datepicker("option", "minDate", checkinDate);
      }
    });
    // need to fix defaultDate of checkout date after checkin date is selected
    $("#search-index-checkout").datepicker({
      // minDate: "+1d",
      minDate: checkin,
      defaultDate: checkout,
      changeMonth: true,
      onClose: function(checkoutDate) {
        // console.log("checkout"+ checkoutDate);
        _this.updateCheckout(checkoutDate);
      }
    });
  },

  loadPriceRange: function() {
    $("#search-index-price-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75,300],
      slide: function(event,ui) {
        var left = (ui.values[0]/5).toFixed(2) + "%";
        var width = ((ui.values[1] - ui.values[0])/5).toFixed(2) + "%";
        // console.log(left + " " + width)
        $("#min-max-range").css({left: left, width: width});
        $("#search-index-amount").val("$"+ui.values[0]+"-$"+ui.values[1]);
      }
    });
    $("#search-index-amount").val("$"+$("#search-index-price-range").slider("values",0)+"-$"+$("#search-index-price-range").slider("values",1));
  },

  componentDidUpdate: function() {
    this.loadDatePicker(this.state.checkin, this.state.checkout);
  },

  componentWillUnmount: function() {
    this.formToken.remove();
  },

  componentDidMount: function() {
    // console.log("componentDidMount")
    this.loadDatePicker();
    this.loadPriceRange();
    this.formToken = FilterStore.addListener(this.updateParams);
    // this.autoFocus();
  },

  // autoFocus: function() {
  //   if(this.state.focus !== null) {
  //     var focusedId = "search-index-" + this.state.focus;
  //     document.getElementById(focusedId).click();
  //   }
  // },


  render: function () {
    console.log("render searchForm" + this.state.checkin + "<>" + this.state.checkout);

    return (
      <div className="search-filters">
        <div>
          <div className="row">
            <div className="col-lg-2 col-md-12 text-center-sm text-center-md row-space-sm-1">
              <label>Dates</label>
            </div>
            <form className="col-lg-9">
              <div className="row row-condensed">
                <div className="col-md-4 col-sm-6 row-space-1-sm">
                  <input
                     name="checkin"
                     id="search-index-checkin"
                     type="text"
                     autoComplete="off"
                     className="ui-datepicker-target"
                     placeholder="Check In"
                     valueLink={this.state.checkin}/>
                </div>
                <div className="col-md-4 col-sm-6 row-space-1-sm">
                  <input
                     name="checkout"
                     id="search-index-checkout"
                     type="text"
                     autoComplete="off"
                     className="ui-datepicker-target"
                     placeholder="Check Out"
                     valueLink={this.state.checkout} />
                </div>
                <div className="col-md-4 col-sm-12">
                  <select
                     name="guests"
                     id="search-index-guest-select"
                     onChange={this.updateGuests}>
                     <option value="1">1 Guest</option>
                     <option value="2">2 Guest</option>
                     <option value="3">3 Guest</option>
                     <option value="4">4 Guest</option>
                     <option value="5">5 Guest</option>
                     <option value="6">6 Guest</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-12 text-center-sm text-center-md row-space-sm-1">
              <label>Room Type</label>
            </div>
            <form className="col-lg-9">

            </form>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-12 text-center-sm text-center-md row-space-sm-1">
              <label>Price Range</label>
              <input type="text" id="search-index-amount" readOnly="" style={{border:'0', color:'#f6931f', fontWeight:'bold', background: "transparent"}} />
            </div>
            <div className="col-lg-9">
              <div id="search-index-price-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                <div id="min-max-range" className="ui-slider-range ui-widget-header ui-corner-all" style={{left: '15%', width: '30%'}}>
                </div>
                <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{left: '15%'}}>
                </span>
                <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{left: '60%'}}>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SearchForm;
