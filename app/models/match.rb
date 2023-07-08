class Match < ApplicationRecord

    validates :skill_level, :phone, presence: true

    belongs_to :club
    belongs_to :user
    has_many :comments

end

#datetime
