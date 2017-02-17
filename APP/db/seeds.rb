# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


TriviaQuestion.create(category: "sports", question: "What is the name of the Super Bowl trophy?")
question = TriviaQuestion.last

TriviaAnswer.create(answer: 'The Lombardi Trophy', trivia_question_id: 1)
TriviaAnswer.create(answer: "The Champion's Trophy", trivia_question_id: 1)
TriviaAnswer.create(answer: "The Super Bowl Trophy", trivia_question_id: 1)
TriviaAnswer.create(answer: "The Golden Ball", trivia_question_id: 1)

question.update(trivia_answer_id: TriviaAnswer.first).save


TriviaQuestion.create!(category: "sports", question: "What basketball player averaged a tripple double in the regular season?")
question2 = TriviaQuestion.last
TriviaAnswer.create!(answer: "Michael Jordan", trivia_question_id: 2)
TriviaAnswer.create!(answer: "Bill Russel", trivia_question_id: 2)
TriviaAnswer.create!(answer: "Lebron James", trivia_question_id: 2)
TriviaAnswer.create!(answer: "Oscar Robinson", trivia_question_id: 2)

question2.update(trivia_answer_id: 8).save


TriviaQuestion.create!(category: "sports", question: "What baseball team has the most World Series Victories?")
TriviaAnswer.create!(answer: "The Mets", trivia_question_id: 3)
TriviaAnswer.create!(answer: "The Cardnials", trivia_question_id: 3)
TriviaAnswer.create!(answer: "The Red Sox", trivia_question_id: 3)
TriviaAnswer.create!(answer: "The Yankees", trivia_question_id: 3)

TriviaQuestion.find(3).update(trivia_answer_id: 12).save
#
#

# #  this line did not work - TriviaQuestion.correct_answer = null
# TriviaQuestion.find(1).update(correct_answer: TriviaAnswer.find(1))
