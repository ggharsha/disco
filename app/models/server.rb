# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  owner_id    :integer          not null
#  server_name :string           not null
#  public      :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Server < ApplicationRecord
    validates :owner_id, :server_name, presence: true
    validates :public, inclusion: { in: [true, false] }

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User
        
    has_many :memberships,
        dependent: :destroy

    has_many :users,
        through: :memberships,
        source: :user

    # has_one_attached :server_picture

    has_many :channels,
        foreign_key: :server_id,
        class_name: :Channel

    has_many :messages,
        through: :channels,
        source: :messages
end
