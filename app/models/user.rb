class User < ApplicationRecord

    has_many :matches
    has_many :clubs, through: :matches
    
end
