class Club < ApplicationRecord

    # validates :park, presence: true
    # validates :park, uniqueness: true

    has_many :matches, dependent: :destroy
    has_many :users, through: :matches

end
