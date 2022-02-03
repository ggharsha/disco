Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update, :show, :destroy]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :index, :show, :update, :destroy] do
      resources :channels, only: [:create]
    end
    resources :memberships, only: [:create]
    resources :channels, only: [:show, :update, :destroy] do 
      resources :messages, only: [:create]
    end
    resources :messages, only: [:update, :show, :destroy, :index]
    resources :conversations, only: [:create, :show, :destroy, :index, :update] do
      resources :direct_messages, only: [:create]
    end
    resources :conversation_memberships, only: [:create, :destroy]
    resources :direct_messages, only: [:update, :show, :destroy, :index]
    resources :friendships, only: [:create, :update, :destroy, :index]
    delete :memberships, to: 'memberships#destroy'
  end

  mount ActionCable.server => '/cable'
  root to: "static_pages#root"
end
