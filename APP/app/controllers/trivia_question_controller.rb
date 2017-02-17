class TriviaQuestionController < ApplicationController
  def random_trivia_question
    question = random_question
    choices = question.answers
    correct_choice = question.trivia_answer

    render :json => {question: question, choices: choices, correctChoice: correct_choice}
  end
end
