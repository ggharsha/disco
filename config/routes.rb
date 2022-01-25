Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update, :show, :destroy]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :index, :show, :update, :destroy]
    resources :memberships, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
