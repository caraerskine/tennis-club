class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar_url, :username, :email

  has_many :matches
  has_many :clubs, through: :matches

  def clubs_uniq
    object.clubs.uniq 
  end

  def matches
    object.matches.map do |match|
      match_serialized = match.serializable_hash
      match_serialized['club'] = match.club
      match_serialized
    end
  end
end

#fancy srlze