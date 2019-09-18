Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :user_artists
      resources :user_concerts
      resources :concerts
      resources :artists
    end
  end
  devise_for :users
  get 'welcome/home'
  get '/app', to: 'welcome#app', as: 'app'
  get '/concerts', to: 'welcome#app'
  get '/concerts/:id', to: 'welcome#app'
  post '/api/v1/artists/search', to: 'api/v1/api#search_artist'
  post '/api/v1/fetch_concerts', to: 'api/v1/api#fetch_concerts'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#home'
end
