Rails.application.routes.draw do

  root to: 'static_pages#index'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy, :show]
    resources :rooms, only: [:index, :create, :update, :destroy, :show]
    get '/reservations/query', to: 'reservations#query'
  end


end
