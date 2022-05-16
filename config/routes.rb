Rails.application.routes.draw do
  
  resources :ores, only: [:index, :show]
  resources :machines, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create]

  post "/login", to: "session#login"
  get "/userInSession", to: "session#get_logged_in_user"
  delete "/logOut", to: "session#log_out"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end




# get  "machines/:special_control", to: "machines#speciallll"
# delete  "machines/:special_control", to: "machines#speciallll"
