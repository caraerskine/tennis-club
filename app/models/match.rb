class Match < ApplicationRecord

    validates :date, :time, :skill_level, :contact_info, presence: true
    validates :date, :time, presence: true

    belongs_to :club
    belongs_to :user
    has_many :comments

end
