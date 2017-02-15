class CreateTriviaGames < ActiveRecord::Migration[5.0]
  def change
    create_table :trivia_games do |t|
      t.integer :trivia_question_id
      t.integer :trivia_answer_id
      t.timestamps
    end
  end
end
