# == Schema Information
#
# Table name: conversations
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer
#
class Conversation < ApplicationRecord
    validates :owner_id, presence: true

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :conversation_memberships,
        foreign_key: :conversation_id,
        class_name: :ConversationMembership,
        dependent: :destroy

    has_many :users,
        through: :conversation_memberships,
        source: :member

    has_many :direct_messages,
        foreign_key: :conversation_id,
        class_name: :DirectMessage,
        dependent: :destroy
end
