class Match < ApplicationRecord

    validates :skill_level, :phone, presence: true
    validates :phone, presence: true, format: { with: /\A(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\z/, message: "must be in the format XXX-XXX-XXXX" }

#regex needs forward slash at beginning and end, those are greyed out in regex builder

    belongs_to :club
    belongs_to :user
    has_many :comments

    attribute :status, :string, default: 'pending'

    belongs_to :sender, class_name: "User", foreign_key: "sender_id"
    belongs_to :receiver, class_name: "User", foreign_key: "receiver_id"
      
    scope :pending, -> { where(status: 'pending') }
    scope :completed, -> { where(status: 'completed') }
    scope :accepted, -> { where(status: 'accepted') }

    def self.with_clubs
        includes(:club)
    end

end

#datetime
#do I need the special method above to get the matches and their clubs so i can render macth card with ti
