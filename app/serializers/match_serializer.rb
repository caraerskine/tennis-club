class MatchSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :receiver_id, :datetime, :skill_level, :phone, :user_id, :club_id, :status, :club_name

  # belongs_to :club, serializer: ClubMatchSerializer
  # belongs_to :user
  # belongs_to :sender, class_name: 'User', foreign_key: 'sender_id'
  # belongs_to :receiver, class_name: 'User', foreign_key: 'receiver_id'

  def club_name
    object.club.club_name
  end



end


#add club_name > maybe redundant????