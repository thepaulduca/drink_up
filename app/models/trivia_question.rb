class TriviaQuestion < ApplicationRecord
  has_one :trivia_answer
  has_many :answers, class_name: 'TriviaAnswer', foreign_key: 'trivia_question_id'
end
