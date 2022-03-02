class Api::UsersController < ApplicationController

  def guest
    @user = User.find_by_credentials({username: 'guestlogin', password: 'guestlogin'})
    if @user
      login!(@user)
      redirect_to user_url(@user)
    else
      @user = User.new
      flash.now[:errors] = { base: ['Demo login not working, please try again or ask a developer'] }
      render :new
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      flash.now[:errors] = @user.errors
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end