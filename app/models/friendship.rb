# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friendship < ApplicationRecord
    validates :user_id, :friend_id, :status, presence: true
    validates :status, inclusion: { in: %w(outgoing incoming accepted) }
    validate :add_self

    belongs_to :friend,
        foreign_key: :friend_id,
        class_name: :User

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    private

    def add_self
        errors.add(:user_id, 'You can\'t add yourself!') if user_id == friend_id
    end
end
