class CreateTriviaAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :trivia_answers do |t|
      t.string :answer
      t.integer :trivia_question_id
      t.integer :trivia_game_id
      t.timestamps
    end
  end
end
