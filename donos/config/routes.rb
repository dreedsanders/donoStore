Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :items 
  resources :transfers 
  resources :ads 
  resources :deals

  post '/login', to: 'users#login'
  post '/transactions', to: 'users#transactions'
end
