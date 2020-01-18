Rails.application.routes.draw do
  get 'confessions/index'
  post 'confessions/create'
  get '/show/:id', to: 'recipes#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
