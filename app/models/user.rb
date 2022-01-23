class User < ApplicationRecord
    validates :username, :tag, :email, :password_digest, :session_token, :handle, presence: true
    validates :email, :session_token, uniqueness: true
    validates :username, uniqueness: { scope: :tag }
    validates :password, length: { minimum: 8 }, allow_nil: true

    after_initialize :ensure_session_token, :assign_tag

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password)
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
end
