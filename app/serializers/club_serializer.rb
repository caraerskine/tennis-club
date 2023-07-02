class ClubSerializer < ActiveModel::Serializer
  attributes :id, :club_name, :street, :description
  has_many :matches, serializer: ClubMatchSerializer
end
