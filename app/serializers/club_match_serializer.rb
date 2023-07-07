class ClubMatchSerializer < ActiveModel::Serializer
  attributes :id, :club, :datetime, :phone, :status, :skill_level, :user_id
end
