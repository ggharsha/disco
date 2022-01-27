class RemoveIndexFromFriendships < ActiveRecord::Migration[5.2]
  def change
    remove_index :friendships, [:user_id, :friend_id]
  end
end
