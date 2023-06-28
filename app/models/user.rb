class User < ApplicationRecord
    has_secure_password

    validates :username, uniqueness: true 
    validates :password, :password_confirmation, :username, presence: true

    has_many :matches, dependent: :destroy
    has_many :clubs, through: :matches

end
