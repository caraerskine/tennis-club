Rails.application.routes.draw do

  #sessions ctrllr
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  #users crtllr
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  #matches crtllr
  # get '/matches/:matchId/comments' 
  post '/matches/:id/comments', to: 'comments#create'
  #or matchID ?? in /  / 

  #have resources for have full crud capability on these
  resources :comments
  resources :users
  resources :matches
  resources :clubs
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
