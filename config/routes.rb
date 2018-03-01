Rails.application.routes.draw do
  namespace :api do
    get '/events', to: 'events#index'
  end

  # namespace :api do
  #   get '/users/${userId}/profile'

  namespace :api do
    resources :users do
      resources :events 
    end
  end

  namespace :api do
    resources :innovators do
      resources :events
    end
  end


end

