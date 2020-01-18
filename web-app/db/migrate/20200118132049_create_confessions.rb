class CreateConfessions < ActiveRecord::Migration[5.2]
  def change
    create_table :confessions do |t|
      t.text :body
      t.int :category

      t.timestamps
    end
  end
end
