class TriviaQuestion < ApplicationRecord
  has_one :correct_answer, class_name: 'TriviaAnswer'
  has_many :trivia_answers
end
