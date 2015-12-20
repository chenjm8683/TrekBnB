var React = require('react');
var FilterStore = require('../../stores/filterStore.js');
var FilterActions = require('../../actions/filterAction.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SearchForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    this.initializeDateBounds();
    var dates = FilterStore.currentDates();
    return ({
      checkin: dates.checkin,
      checkout: dates.checkout,
      guests: FilterStore.currentGuests()
    })
  },

  initializeDateBounds: function() {
    var min = new Date();
    min.setHours(0,0,0,0);
    this.minCheckin = new Date(min);
    var max = new Date(min)
    max.setFullYear(min.getFullYear() + 3);
    this.maxCheckout = new Date(max);
    max.setDate(max.getDate() - 1);
    this.maxCheckin = new Date(max);
    min.setDate(min.getDate() + 1);
    this.minCheckout = new Date(min);
    this.defaultCheckin = (this.minCheckin.getMonth() + 1) + '/'
                        + this.minCheckin.getDate() + '/'
                        + this.minCheckin.getFullYear();
    this.defaultCheckout = (this.minCheckout.getMonth() + 1) + '/'
                        + this.minCheckout.getDate() + '/'
                        + this.minCheckout.getFullYear();

                        // debugger;
  },

  updateParams: function() {
    var dates = FilterStore.currentDates();
    this.setState({
      checkin: dates.checkin,
      checkout: dates.checkout,
      guests: FilterStore.currentGuests()
    });
  },

  // need to refactor: 1. validate date format, 2. validate checkin<checkout
  updateCheckin: function(date) {
    var checkin = this.validateCheckin(date);
    // console.log(checkin);
    if (this.state.checkout !== ""
      && Date.parse(checkin) < Date.parse(this.state.checkout)) {
        this.setState({
          checkin: checkin
        });
        this.updateDates();
    } else {
      this.setState({
        checkin: checkin,
        checkout: ""
      });
    }
  },

  updateCheckout: function(date) {
    var checkout = this.validateCheckout(date);
    if (this.state.checkin !== ""
      && Date.parse(checkout) > Date.parse(this.state.checkin)) {
        this.setState({
          checkout: checkout
        });
        this.updateDates();
    } else {
      this.setState({
        checkin: "",
        checkout: checkout
      });
    }
  },

  validateCheckin: function(date) {
    var inputDate = Date.parse(date);
    if (inputDate < this.minCheckin || inputDate > this.maxCheckin) {
      return this.defaultCheckout;
    } else {
      return date;
    }
  },

  validateCheckout: function(date) {
    var inputDate = Date.parse(date);
    if (inputDate < this.minCheckout || inputDate > this.maxCheckout) {
      return this.defaultCheckout;
    } else {
      return date;
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
      var checkout = "+1D";
    } else if (checkin !== "" && checkout === "") {
      // var checkoutDate = new Date(checkin);
      // checkoutDate.setDate(checkoutDate.getDate() + 1);
      // checkout = ((checkoutDate.getMonth() + 1) + '/'
      //           + checkoutDate.getDate() + '/'
      //           + checkoutDate.getFullYear());
      checkout = (Date.parse(checkin) - this.minCheckin) / 86400000 + 1
      console.log(checkout);
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
      minDate: "+1D",
      defaultDate: "+" + checkout + "D",
      changeMonth: true,
      onClose: function(checkoutDate) {
        // console.log("checkout"+ checkoutDate);
        _this.updateCheckout(checkoutDate);
      }
    });
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
    this.formToken = FilterStore.addListener(this.updateParams);
  },


  render: function () {
    console.log("render searchForm" + this.state.checkin + "<>" + this.state.checkout);

    return (
      <div className="filters">
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
                     valueLink={this.state.checkin} />
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
        </div>
      </div>
    );
  }

});

module.exports = SearchForm;
