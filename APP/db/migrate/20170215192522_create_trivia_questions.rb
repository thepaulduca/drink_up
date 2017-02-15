class CreateTriviaQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :trivia_questions do |t|
      t.string :category
      t.string :question
      t.integer :correct_answer
      t.integer :trivia_answer_id
      t.timestamps
    end
  end
end
