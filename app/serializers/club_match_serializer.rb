class ClubMatchSerializer < ActiveModel::Serializer
  attributes :id, :club_id, :datetime, :phone, :skill_level, :user_id, :user
  belongs_to :club
  

end
