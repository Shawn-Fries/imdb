class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render '/api/users/show'
    else
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