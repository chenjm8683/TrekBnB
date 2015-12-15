class Api::UsersController < ApplicationController
  before_action :require_no_user!

  def create
    @user = User.new(user_params)
    if @user.save
      # @user.create_user_profile!
      login_user!(@user)
      render json: @user
      # render :user_account
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
