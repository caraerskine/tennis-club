class MatchSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :receiver_id, :club, :datetime, :skill_level, :phone, :user_id, :club_id, :status

  # def club_name
  #   object.club.match
  # end

  belongs_to :club
  nelongs_to :user

end
