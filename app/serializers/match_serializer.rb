class MatchSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :receiver_id, :datetime, :skill_level, :phone, :user_id, :club_id, :status

  belongs_to :club
  belongs_to :user
  belongs_to :sender, class_name: 'User', foreign_key: 'sender_id'
  belongs_to :receiver, class_name: 'User', foreign_key: 'receiver_id'

  def club_name
    object.club.match
  end

end
