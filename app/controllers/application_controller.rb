class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def random_question
    question_id = rand(1..TriviaQuestion.all.length)
    TriviaQuestion.find_by(id: question_id)
  end

  def random_truth_dare
    arry = []
    truth_id = rand(1..Truth.all.length)
    dare_id = rand(1..Dare.all.length)
    arry << Truth.find(truth_id) << Dare.find(dare_id)
  end
end
