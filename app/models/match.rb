class Match < ApplicationRecord

    validates :skill_level, :phone, presence: true

    belongs_to :club
    belongs_to :user
    has_many :comments

    belongs_to :sender, class_name: "User", foreign_key: "sender_id"
    belongs_to :receiver, class_name: "User", foreign_key: "receiver_id"
      
    scope :pending, -> { where(status: 'pending') }
    scope :completed, -> { where(status: 'completed') }
    scope :accepted, -> { where(status: 'accepted') }

    # def self.with_clubs
    #     includes(:club)
    # end

end

#datetime
#do I need the special method above to get the matches and their clubs so i can render macth card with ti
