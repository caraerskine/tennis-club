class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar_url, :username, :email, :opponents, :matches

  has_many :clubs, through: :matches

  def clubs_uniq
    object.clubs.uniq 
  end

  def matches
    m = object.sent_matches + object.received_matches
      matches = m.map do |match|
      match_serialized = match.serializable_hash
      match_serialized['club'] = match.club
      match_serialized['opponent_pic'] = User.find(object.id == match.receiver_id ? match.sender_id : match.receiver_id).avatar_url || ""
      if match.comments.count > 0 

        match_serialized['comments'] = match.comments.map do |comment|
          comment_serialized = comment.serializable_hash
          comment_serialized['name'] = comment.user.name
          comment_serialized
        end 
      else 
        match_serialized['comments'] = []
      end
      match_serialized
    end 
      matches
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
