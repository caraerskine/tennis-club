class User < ApplicationRecord
    has_secure_password

    after_initialize :avatar, if: :new_record?
  
    validates :username, uniqueness: true 
    validates :password, :password_confirmation, :username, presence: true
    validates :password, length: { minimum: 8, maximum: 20 }

    has_many :matches, dependent: :destroy
    has_many :clubs, through: :matches
    has_many :comments

    has_many :sent_matches, class_name: "Match", foreign_key: "sender_id"
    has_many :received_matches, class_name: "Match", foreign_key: "receiver_id"

  
    private

    def avatar
        if avatar_url.blank?
          self.avatar_url = 'don_budge_tennis.webp'
        end
    end

end
