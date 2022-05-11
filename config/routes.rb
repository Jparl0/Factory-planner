Rails.application.routes.draw do
  
  resources :ores, only: [:index, :show]
  resources :machines, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end



# t.string :name
# t.integer :voltage
# t.integer :input
# t.integer :output

# t.timestamps


# t.string :type
# t.string :purity
# t.belongs_to :user, null: false, foreign_key: true
# t.belongs_to :machine, null: false, foreign_key: true

# t.timestamps