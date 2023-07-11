class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar_url, :username, :email, :opponents

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

  #to get opponents
    # User.all.filterOut.object.id
    #for each user filter out the object id
    #object id is your user who is logged in
    #object.id is user_id
    #map over each user
    #serializable hash where you include the attributes you want the oppoenent to have like
    #name, avatar_url, username, id
    #has access to "current_user" object
    #object and the things you are ssrlzing is the same in slrzr

    #object is the user sent from the user rcontroller below

    #how 
    
    def opponents
      User.where.not(id: object.id).map do |user|
        {
          id: user.id,
          name: user.name,
          avatar_url: user.avatar_url,
          username: user.username
        }
      end
    end
  
end


#fancy srlze