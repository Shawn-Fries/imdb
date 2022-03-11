class Api::UsersController < ApplicationController

  def guest
    @user = User.find_by_credentials({username: 'guestlogin', password: 'guestlogin'})
    if @user
      login!(@user)
      redirect_to user_url(@user)
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end