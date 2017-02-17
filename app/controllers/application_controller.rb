class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def random_question
    # get random number between 1 and total number of questions
    question_id = rand(1..TriviaQuestion.all.length)
    TriviaQuestion.find_by(id: question_id)
  end
end
