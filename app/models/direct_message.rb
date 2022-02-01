# == Schema Information
#
# Table name: direct_messages
#
#  id              :bigint           not null, primary key
#  sender_id       :integer          not null
#  conversation_id :integer          not null
#  body            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class DirectMessage < ApplicationRecord
    validates :sender_id, :conversation_id, :body, presence: true
    validates :body, length: { in: 1..2000, too_long: "2000 characters is the maximum allowed." }

    belongs_to :user,
        foreign_key: :sender_id,
        class_name: :User

    belongs_to :conversation,
        foreign_key: :conversation_id,
        class_name: :Conversation
end
