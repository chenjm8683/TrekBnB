class Api::ReservationsController < ApplicationController

# for availability query
  def query
    rsvp = Reservation.new(query_params)
    render json: rsvp.overlapping_unbookable_period.empty?
  end





  private
  def query_params
    params.require(:rquery).permit(:room_id, :start_date, :end_date)
  end

end
