# == Schema Information
#
# Table name: conversation_memberships
#
#  id              :bigint           not null, primary key
#  member_id       :integer          not null
#  conversation_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class ConversationMembership < ApplicationRecord
    validates :member_id, :conversation_id, presence: true
    validates :member_id, uniqueness: { scope: :conversation_id }

    belongs_to :member,
        foreign_key: :member_id,
        class_name: :User

    belongs_to :conversation,
        foreign_key: :conversation_id,
        class_name: :Conversation
end
