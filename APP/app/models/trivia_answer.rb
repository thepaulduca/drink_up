class TriviaAnswer < ApplicationRecord
  belongs_to :trivia_game
  has_one :trivia_question
end
