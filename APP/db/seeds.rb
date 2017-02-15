# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

TriviaQuestion.create!(category: "sports",question: "What is the name of the Super Bowl trophy?")

TriviaAnswer.create!(answer: 'The Lombardi Trophy', trivia_question_id: 1)
TriviaAnswer.create!(answer: "The Champion's Trophy", trivia_question_id: 1)
TriviaAnswer.create!(answer: 'The Lombardi Trophy', trivia_question_id: 1)
TriviaAnswer.create!(answer: "The Super Bowl Trophy", trivia_question_id: 1)
TriviaAnswer.create!(answer: "The Golden Ball", trivia_question_id: 1)


#  this line did not work - TriviaQuestion.correct_answer = null
# TriviaQuestion.find(1).update(correct_answer: TriviaAnswer.find(1))
