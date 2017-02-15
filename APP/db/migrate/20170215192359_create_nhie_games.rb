class CreateNhieGames < ActiveRecord::Migration[5.0]
  def change
    create_table :nhie_games do |t|

      t.timestamps
    end
  end
end
