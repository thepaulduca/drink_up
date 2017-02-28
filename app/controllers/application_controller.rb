class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def random_question
    question_id = rand(1..TriviaQuestion.all.length)
    TriviaQuestion.find_by(id: question_id)
  end

  def random_truth_dare
    arry = []
    truth_id1 = rand(1..TriviaQuestion.all.length)
    truth_id2 = rand(1..TriviaQuestion.all.length)
    dare_id1 = rand(1..TriviaQuestion.all.length)
    dare_id2 = rand(1..TriviaQuestion.all.length)
    arry << Truth.find(truth_id1) << Truth.find(truth_id2) << Dare.find(dare_id1) << Dare.find(dare_id2)
  end
end
