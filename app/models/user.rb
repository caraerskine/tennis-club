class User < ApplicationRecord
    has_secure_password

    validates :username, uniqueness: true 
    validates :password, :password_confirmation, :username, presence: true

    has_many :matches, dependent: :destroy
    has_many :clubs, through: :matches

    has_many :sent_matches, class_name: "Match", foreign_key: "sender_id"
    has_many :received_matches, class_name: "Match", foreign_key: "receiver_id"

end
