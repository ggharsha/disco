class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.integer :conversation_membership, null: false

      t.timestamps
    end
    add_index :conversations, :conversation_membership
  end
end
