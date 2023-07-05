class Club < ApplicationRecord

    validates :club_name, presence: true
    validates :club_name, uniqueness: true

    has_many :matches, dependent: :destroy
    has_many :users, through: :matches

end


# validates :park, presence: true
# validates :park, uniqueness: true

# has_many :games, dependent: :destroy
# has_many :users, through: :games 

