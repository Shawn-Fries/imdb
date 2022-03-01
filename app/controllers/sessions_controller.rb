class SessionsController < ApplicationController
  before_action :redirect_if_logged_in, except: :destroy

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login!(@user)
      redirect_to root_url
    else
      @user = User.new
      flash.now[:errors] = { base: ['Invalid username or password'] }
      render :new
    end
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

  def destroy
    logout!
    redirect_to new_session_url
  end
end