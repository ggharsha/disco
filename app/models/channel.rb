# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  server_id    :integer
#  channel_name :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Channel < ApplicationRecord
    validates :channel_name, :server_id, presence: true
    validates :channel_name, uniqueness: { scope: :server_id }

    belongs_to :server,
        foreign_key: :server_id,
        class_name: :Server
end
