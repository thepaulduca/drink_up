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

  def random_would_u
    rwu_id = rand(1..WouldURather.all.length)
    WouldURather.find_by(id: rwu_id)
  end

  def find_random_NHIE
    nhie_id = nhie_id = rand(1..NeverHaveIEver.all.length)
    nhie = NeverHaveIEver.find(nhie_id)
  end

end
