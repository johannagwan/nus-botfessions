Rails.application.routes.draw do
  root 'homepage#index'
  get 'confessions/index'
  post 'confessions/create'
  get '/show/:id', to: 'confessions#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
