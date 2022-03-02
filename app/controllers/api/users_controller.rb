class Api::UsersController < ApplicationController
  before_action :redirect_if_logged_in

  def new
    @user = User.new
  end

  def guest
    @user = User.find_by_credentials({username: 'guest_login', password: 'guest_login'})
    if @user
      login!(@user)
      redirect_to root_url
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
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors
      render :new
    end
  end
end