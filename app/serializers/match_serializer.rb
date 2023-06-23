class MatchSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :receiver_id, :club, :date, :time, :skill_level, :contact_info, :user_id, :club_id, :status
end
