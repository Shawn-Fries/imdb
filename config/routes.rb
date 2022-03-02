Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:new, :create, :guest]
    resource :session, only: [:new, :create, :destroy, :guest]
    resources :movies, only: [:show]
  end

  root to: 'root#root'

end
