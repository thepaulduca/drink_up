Rails.application.routes.draw do
  root "welcome#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/trivia_question', to: 'trivia_question#random_trivia_question'
end
