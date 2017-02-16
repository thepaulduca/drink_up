class TriviaAnswer < ApplicationRecord
  belongs_to :trivia_question, class_name: 'TriviaQuestion'
end
