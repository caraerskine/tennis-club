class User < ApplicationRecord
    has_secure_password

    validates :username, uniqueness: true 
    validates :password, :password_confirmation, :username, presence: true
    validates :password, length: { minimum: 8, maximum: 20 }
    # validates :avatar_url, presence: true

    has_many :matches, dependent: :destroy
    has_many :clubs, through: :matches
    has_many :comments

    has_many :sent_matches, class_name: "Match", foreign_key: "sender_id"
    has_many :received_matches, class_name: "Match", foreign_key: "receiver_id"

end

#how do I get teh opponents avatr_url to show up on the profile so ppl can see their matches versus who?