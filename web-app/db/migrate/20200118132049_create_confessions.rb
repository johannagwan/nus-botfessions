class CreateConfessions < ActiveRecord::Migration[5.2]
  def change
    create_table :confessions do |t|
      t.text :confession_body, null: false
      t.integer :category, null: false

      t.timestamps
    end
  end
end
