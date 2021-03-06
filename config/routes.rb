Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:new, :create, :guest]
    resource :session, only: [:create, :destroy, :guest]
    resources :movies, only: [:show] do
      resources :reviews, only: [:index, :create, :show]
    end
    resources :showtimes, only: [:show]

  end

  root to: 'root#root'

end
