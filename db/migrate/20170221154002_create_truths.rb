class CreateTruths < ActiveRecord::Migration[5.0]
  def change
    create_table :truths do |t|
      t.string :content
      t.timestamps
    end
  end
end
