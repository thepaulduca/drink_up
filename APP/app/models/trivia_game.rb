class TriviaGame < ApplicationRecord
  has_many :trivia_questions
  has_many :trivia_answers
end
