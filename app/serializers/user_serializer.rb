class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar_url, :username, :email
  has_many :matches
  has_many :clubs, through: :matches

  # def clubs_uniq
  #   object.clubs.uniq 
  # end

end
