# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  sender_id  :integer          not null
#  replied_id :integer
#  channel_id :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Message < ApplicationRecord
    validates :sender_id, :channel_id, :body, presence: true
    validates :body, length: { in: 1..2000, too_long: "2000 characters is the maximum allowed." }

    belongs_to :user,
        foreign_key: :sender_id,
        class_name: :User
    
    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: :Channel

    # belongs_to :replied_message,
    #     foreign_key: :replied_id,
    #     class_name: :Message
    # this breaks my validations for whatever reason
end
