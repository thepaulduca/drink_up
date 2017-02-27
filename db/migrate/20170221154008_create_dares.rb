class CreateDares < ActiveRecord::Migration[5.0]
  def change
    create_table :dares do |t|
      t.string :content
      t.timestamps
    end
  end
end
