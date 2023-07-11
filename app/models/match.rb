class Match < ApplicationRecord

    validates :skill_level, :phone, presence: true

    belongs_to :club
    belongs_to :user
    has_many :comments

    belongs_to :sender, class_name: "User", foreign_key: "sender_id"
    belongs_to :receiver, class_name: "User", foreign_key: "receiver_id"
      
      

end

#datetime
