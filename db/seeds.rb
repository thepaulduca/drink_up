# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


TriviaQuestion.create(category: "sports", question: "What is the name of the Super Bowl trophy?")
TriviaAnswer.create(answer: 'The Lombardi Trophy', trivia_question_id: 1)
TriviaAnswer.create(answer: "The Champion's Trophy", trivia_question_id: 1)
TriviaAnswer.create(answer: "The Super Bowl Trophy", trivia_question_id: 1)
TriviaAnswer.create(answer: "The Golden Ball", trivia_question_id: 1)
TriviaQuestion.find(1).trivia_answer = TriviaAnswer.find(1)
TriviaQuestion.find(1).save

TriviaQuestion.create(category: "sports", question: "What basketball player averaged a tripple double in a season?")
TriviaAnswer.create(answer: "Michael Jordan", trivia_question_id: 2)
TriviaAnswer.create(answer: "Oscar Robinson", trivia_question_id: 2)
TriviaAnswer.create(answer: "Bill Russel", trivia_question_id: 2)
TriviaAnswer.create(answer: "Lebron James", trivia_question_id: 2)
TriviaQuestion.find(2).trivia_answer = TriviaAnswer.find(6)
TriviaQuestion.find(2).save


TriviaQuestion.create(category: "sports", question: "What baseball team has the most World Series Victories?")
TriviaAnswer.create(answer: "The Mets", trivia_question_id: 3)
TriviaAnswer.create(answer: "The Cardnials", trivia_question_id: 3)
TriviaAnswer.create(answer: "The Yankees", trivia_question_id: 3)
TriviaAnswer.create(answer: "The Red Sox", trivia_question_id: 3)
TriviaQuestion.find(3).trivia_answer = TriviaAnswer.find(11)
TriviaQuestion.find(3).save

Truth.create(content: "What is your biggest fear?")
Truth.create(content: "Who is your celebrity crush?")
Truth.create(content: "How old were you when you last peed the bed?")
Truth.create(content: "What is your biggest fear?")

Dare.create(content: "Text your ex - 'Sorry not sorry'")
Dare.create(content: "Post a video on social media of you dancing to a Paris Hilton song")
Dare.create(content: "Dance with the closest person to you of the oppiste sex for 2 mins")
Dare.create(content: "Call a Chinnese restaurant and ask 8 different questions")
