# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    has_many :posts,
        foreign_key: :author_id,
        class_name: :Post

    has_many :follower_joins,
        foreign_key: :following_id,
        class_name: :Follow

    has_many :following_joins,
        foreign_key: :follower_id
        class_name: :Follow

    has_many :followers,
        through: :follower_joins,
        source: :follower

    has_many :followings,
        through: :follower_joins,
        source: :following

    has_many :likes

    has_many :comments,
        foreign_key: :author_id,
        class_name: :Comment

    attr_reader :password
    after_initialize :ensure_session_token
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
    

end