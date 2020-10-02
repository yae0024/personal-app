Rails.application.routes.draw do
  devise_for :users
  root to: "welcome#index"

  resources :pictures, except: [:index] do
    collection do
      get 'search'
    end
    resources :comments, only: :create
  end
end
