class Match < ApplicationRecord

    validates :skill_level, :phone, presence: true
    validates :phone, presence: true, format: { with: /\A(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\z/, message: "must be in the format XXX-XXX-XXXX" }
    validate :ensure_phone_number_present
    validate :user_and_sender_id_are_same
#singular bc custom line 5 and trying to see if I need :phone on line 3
#line 3 is presence validation, checks if present
#line 4 is a format validation, dfined if present 

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

    private
    def user_and_sender_id_are_same
        if user_id != sender_id
          errors.add(:base, "user_id and sender_id must be the same")
        end
    end 

    def ensure_phone_number_present
        puts "validating phone present..."
        unless phone.present?
            # byebug
          throw :abort # This will prevent the record from being saved
        end
    end

end

#datetime
#do I need the special method above to get the matches and their clubs so i can render macth card with ti
#regex needs forward slash at beginning and end, those are greyed out in regex builder