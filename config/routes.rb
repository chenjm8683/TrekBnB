Rails.application.routes.draw do

  root to: 'static_pages#index'

  namespace :api, constrains: { format: 'json' } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy, :show]
    resources :rooms, only: [:index, :create, :update, :destroy, :show]
  end


end
