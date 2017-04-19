class CreateWildCards < ActiveRecord::Migration[5.0]
  def change
    create_table :wild_cards do |t|
      t.string :content
      t.timestamps
    end
  end
end
