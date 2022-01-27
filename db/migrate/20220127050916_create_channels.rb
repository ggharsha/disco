class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :server_id
      t.string :channel_name, null: false
      t.string :channel_type, null: false

      t.timestamps
    end
    add_index :channels, :server_id
    add_index :channels, :channel_name
  end
end
