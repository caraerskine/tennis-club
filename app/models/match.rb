class Match < ApplicationRecord

    validates :skill_level, :phone, presence: true
    validates :phone, presence: true, format: { with: /\A(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\z/, message: "must be in the format XXX-XXX-XXXX" }
    validate :ensure_phone_number_present
    validate :user_and_sender_id_are_same

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
          throw :abort 
        end
    end

end

