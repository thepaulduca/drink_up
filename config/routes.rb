Rails.application.routes.draw do
  get '/truth_dare', to: 'truth_dare#random_td'
  get '/never_have_i_ever', to: 'never_have_i_ever#random_NHIE'
  get '/trivia_question', to: 'trivia_question#random_trivia_question'
  root "welcome#index"
end
