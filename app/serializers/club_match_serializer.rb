class ClubMatchSerializer < ActiveModel::Serializer
  attributes :id, :skill_level, :user_id, :user

end

#redundant club_id and datetime
#took :phone out

