Rails.application.routes.draw do
  devise_for :users
  root to: "pictures#index"

  resources :pictures, except: [:index] do
    collection do
      get 'all'
      get 'search'
    end
    resources :comments, only: :create
  end
end
