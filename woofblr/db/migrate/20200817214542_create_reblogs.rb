class CreateReblogs < ActiveRecord::Migration[5.2]
  def change
    create_table :reblogs do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.text :body

      t.timestamps
    end
    add_index :reblogs, :user_id
    add_index :reblogs, :post_id
  end
end
