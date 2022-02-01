# == Schema Information
#
# Table name: conversations
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Conversation < ApplicationRecord
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
