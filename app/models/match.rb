class Match < ApplicationRecord

    # validates :time, :skill_level, :contact_info, presence: true
    # validates :time, presence: true

    belongs_to :club
    belongs_to :user
    has_many :comments

end
