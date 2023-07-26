class User < ApplicationRecord
    has_secure_password

    # after_initialize :set_default_avatar_url, if: :new_record?

    validates :username, uniqueness: true 
    validates :password, :password_confirmation, :username, presence: true
    validates :password, length: { minimum: 8, maximum: 20 }
    # validates :avatar_url, presence: true

    has_many :matches, dependent: :destroy
    has_many :clubs, through: :matches
    has_many :comments

    has_many :sent_matches, class_name: "Match", foreign_key: "sender_id"
    has_many :received_matches, class_name: "Match", foreign_key: "receiver_id"

    #first idea for default avatar_url
    # attribute :avatar_url, :string, default: 'https://static01.nyt.com/images/2015/09/13/sports/DOG-slam/DOG-slam-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    
    # def avatar
    #     avatar_url.present? ? avatar_url : '/images/don_budge_tennis.webp'
    # end

    def avatar
        avatar_url.present? ? avatar_url : image_url('don_budge_tennis.webp')
      end
      

    # private

    # def set_default_avatar_url
    #   # Check if the avatar_url is not provided (i.e., it's nil or blank)
    #   if avatar_url.blank?
    #     # Set the default avatar_url to a URL of your choice
    #     #don budge
    #     # self.avatar_url = self.avatar_url = ActionController::Base.helpers.asset_path('don_budge_tennis.webp')
    #     self.avatar_url = 'don_budge_tennis.webp'
    #   end
    # end

end

#how do I get teh opponents avatr_url to show up on the profile so ppl can see their matches versus who?

# '/assets/don_budge_tennis.webp'



# 'https://static01.nyt.com/images/2015/09/13/sports/DOG-slam/DOG-slam-articleLarge.jpg?quality=75&auto=webp&disable=upscale'