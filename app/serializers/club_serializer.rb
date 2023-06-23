class ClubSerializer < ActiveModel::Serializer
  attributes :id, :club_name, :street, :description
end
