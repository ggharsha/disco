class AddColumnToConversations < ActiveRecord::Migration[5.2]
  def change
    add_column :conversations, :owner_id, :integer
    add_index :conversations, :owner_id
  end
end
