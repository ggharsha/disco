class CreateDirectMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_messages do |t|
      t.integer :sender_id, null: false
      t.integer :conversation_id, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :direct_messages, :sender_id
    add_index :direct_messages, :conversation_id
  end
end
