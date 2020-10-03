Rails.application.routes.draw do
  devise_for :users
  root to: "welcome#index"

  resources :users do
    member do
      get 'media'
      get 'favorite'
      get 'message'
      get 'setting'
    end
  end

  resources :pictures do
    collection do
      get 'search'
    end
    resources :comments, only: :create
  end
end
