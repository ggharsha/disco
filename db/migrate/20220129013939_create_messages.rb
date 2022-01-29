class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.integer :replied_id
      t.integer :channel_id, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :messages, :sender_id
    add_index :messages, :replied_id
    add_index :messages, :channel_id
  end
end
