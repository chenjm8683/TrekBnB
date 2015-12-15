class Api::RoomsController < ApplicationController
  before_action :require_login!, except: [:index, :show]

  def index
    # initially show all rooms, later change to current map view
    # later switch to jbuilder
    @rooms = Room.all
    render json: @rooms, status: 200
  end

  def create
    @room = current_user.listings.new(room_params)
    if @room.save
      render json: @room, status: 201
    else
      render json: @room.errors.full_messages, status: 400
    end
  end

  def update
    @room = current_user.listings.find_by_id(params[:room][:id])
    if @room.nil?
      render json: {error: "Listing not found or unauthorized request"}, status: 401
    elsif @room.update(room_params)
      render json: @room, status: 200
    else
      render json: @room.errors.full_messages, status: 400
    end

  end

  def show
    @room = Room.find_by_id(params[:id])
    if @room.nil?
      render json: {error: "Room not found"}, status: 401
    else
      render json: @room, status: 200
    end
  end

  def destroy
    @room = current_user.listings.find_by_id(params[:id])
    if @room.nil?
      render json: {error: "Listing not found or unauthorized request"}, status: 401
    elsif @room.delete
      render json: @room, status: 200
    else
      render json: @room.errors.full_messages, status: 400
    end
  end

  private
  def room_params
    params.require(:room).permit(:title, :type_id, :price, :city, :lat, :lng)
  end

end
