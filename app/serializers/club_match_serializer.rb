class ClubMatchSerializer < ActiveModel::Serializer
  attributes :id, :club_id, :datetime, :phone, :skill_level, :user_id, :user, :name_of_club
  belongs_to :club
  
  def name_of_club
      object.club.club_name
  end

end
