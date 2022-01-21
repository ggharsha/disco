class User < ApplicationRecord
    validates :username, :tag, :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :username, uniqueness: { scope: :tag }
    validates :password, length: { minimum: 8 }, allow_nil: true
    after_initialize :ensure_session_token
    attr_reader :password

    
end
