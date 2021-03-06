# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  tag             :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'open-uri'

AVATAR_URL_PATHS = [
    "Pastel-Black.png",
    "Pastel-Blue.png",
    "Pastel-Gray.png",
    "Pastel-Green.png",
    "Pastel-Indigo.png",
    "Pastel-Orange.png",
    "Pastel-Pink.png",
    "Pastel-Red.png",
    "Pastel-Violet.png",
    "Pastel-Yellow.png"
]

class User < ApplicationRecord
    validates :username, :tag, :email, :password_digest, :session_token, :handle, presence: true
    validates :email, :session_token, uniqueness: true
    validates :username, uniqueness: { scope: :tag }
    validates :password, length: { minimum: 8 }, allow_nil: true
    validates :email, format: { with: /\A[\w+-.]+@[a-z\d-]+(.[a-z\d-]+)*.[a-z]+\z/i, message: "invalid"  },
        uniqueness: { case_sensitive: false },
        length: { minimum: 4, maximum: 254 }
    after_initialize :ensure_session_token, :assign_tag, :assign_avatar

    attr_reader :password, :handle

    has_many :owned_servers,
        foreign_key: :owner_id,
        class_name: :Server,
        dependent: :destroy

    has_many :memberships,
        dependent: :destroy

    has_many :servers_joined,
        through: :memberships,
        source: :server
    
    has_one_attached :avatar

    has_many :friendships

    has_many :friends,
        -> { where friendships: { status: "accepted" }},
        through: :friendships,
        source: :friend,
        dependent: :destroy

    has_many :outgoing_friend_requests,
        -> { where friendships: { status: "outgoing" }},
        through: :friendships,
        source: :friend,
        dependent: :destroy

    has_many :incoming_friend_requests,
        -> { where friendships: { status: "incoming" }},
        through: :friendships,
        source: :friend,
        dependent: :destroy

    has_many :messages,
        foreign_key: :sender_id,
        class_name: :Message,
        dependent: :destroy

    has_many :conversation_memberships,
        foreign_key: :member_id,
        class_name: :ConversationMembership,
        dependent: :destroy
    
    has_many :direct_messages,
        foreign_key: :sender_id,
        class_name: :DirectMessage,
        dependent: :destroy

    has_many :conversations,
        through: :conversation_memberships,
        source: :conversation

    has_many :owned_conversations,
        foreign_key: :owner_id,
        class_name: :Conversation,
        dependent: :destroy

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def assign_tag
        self.tag ||= build_tag
        @handle = username + '#' + tag
    end

    def build_tag
        num = rand(1..9999)
        if num < 10
            num = "000" + num.to_s
        elsif num < 100
            num = "00" + num.to_s
        elsif num < 1000
            num = "0" + num.to_s
        else 
            num = num.to_s
        end
    end

    def assign_avatar
        self.avatar.attached? ? self.avatar : build_avatar
    end

    def build_avatar
        color = AVATAR_URL_PATHS.sample
        self.avatar.attach(io: open("https://disco-aa-seeds.s3.amazonaws.com/" + color), filename: color)
    end
end