class Renamecolumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :conversations, :conversation_membership
  end
end
