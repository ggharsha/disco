Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update, :show, :destroy]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :index, :show, :update, :destroy] do
      resources :channels, only: [:create]
    end
    resources :memberships, only: [:create, :destroy]
    # resources :friendships, only: [:create, :update, :destroy, :index]
    resources :channels, only: [:show, :update, :destroy] do 
      resources :messages, only: [:create]
    end
    resources :messages, only: [:update, :show, :destroy, :index]
  end

  mount ActionCable.server => '/cable'
  root to: "static_pages#root"
end
