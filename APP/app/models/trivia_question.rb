class TriviaQuestion < ApplicationRecord
  belongs_to :trivia_game
  has_one :correct_answer, class_name: 'TriviaAnswer'
  has_many :trivia_answers
end
