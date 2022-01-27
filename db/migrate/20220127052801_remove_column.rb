class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :channel_type
  end
end
