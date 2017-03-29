class CreateWouldURathers < ActiveRecord::Migration[5.0]
  def change
    create_table :would_u_rathers do |t|
      t.string :choice1
      t.string :choice2
      t.timestamps
    end
  end
end
