Rails.application.routes.draw do

  #sessions ctrlr
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  #users crtlr
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'


  resources :comments
  resources :users
  resources :matches
  resources :clubs
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
