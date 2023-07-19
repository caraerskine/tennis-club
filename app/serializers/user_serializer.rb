class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar_url, :username, :email, :opponents

  has_many :matches
  has_many :clubs, through: :matches

  def clubs_uniq
    object.clubs.uniq 
  end

  def matches
    object.sent_matches + object.received_matches.map do |match|
      match_serialized = match.serializable_hash
      match_serialized['club'] = match.club
      match_serialized
    end
  end
   
  def comments
    object.comments.map do |comment|
      comment_serialized = comment.serializable_hash
      comment_serialized['name'] = comment.user.name
      comment_serialized
    end
  end

    def opponents
      User.where.not(id: object.id).map do |user|
        {
          id: user.id,
          name: user.name,
          avatar_url: user.avatar_url,
          username: user.username,
        }
      end
    end
  
end

# do i need opponents in here?


#fancy srlze