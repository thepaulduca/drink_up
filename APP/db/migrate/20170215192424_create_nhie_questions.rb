class CreateNhieQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :nhie_questions do |t|
      t.text :text
      t.integer :nhie_game_id

      t.timestamps
    end
  end
end
