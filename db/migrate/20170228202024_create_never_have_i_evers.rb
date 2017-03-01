class CreateNeverHaveIEvers < ActiveRecord::Migration[5.0]
  def change
    create_table :never_have_i_evers do |t|
      t.string :content
      t.timestamps
    end
  end
end
