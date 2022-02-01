class CreateConversationMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :conversation_memberships do |t|
      t.integer :member_id, null: false
      t.integer :conversation_id, null: false

      t.timestamps
    end
    add_index :conversation_memberships, :member_id
    add_index :conversation_memberships, :conversation_id
    add_index :conversation_memberships, [:member_id, :conversation_id], unique: true
  end
end
