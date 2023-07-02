class ClubSerializer < ActiveModel::Serializer
  attributes :id, :club_name, :street, :description, :club_img
  has_many :matches, serializer: ClubMatchSerializer
end
