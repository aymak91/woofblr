Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :index, :show, :destroy] do
      resources :likes, only: [:index]
      resources :follows, only: [:index]
    end

    resource :session, only: [:create, :destroy] do
      resource :like, only: [:destroy]
    end
    
    resources :posts, only: [:index, :create, :update, :show, :destroy] do
      resource :like, only: [:destroy]
    end

    resource :likes, only: [:create]
    resources :follows, only: [:create, :destroy, :show]

  end

  

end
