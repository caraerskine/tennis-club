class MatchSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :receiver_id, :datetime, :skill_level, 
  :phone, :user_id, :club_id, :status, :club_name, :comments, :opponent_pic

  # has_many :comments
  #added this today 7/19

  def club_name
    object.club.club_name
  end

  def comments
    comments = object.comments&.slice(-6,6)&.map do |comment|
      comment_serialized = comment.serializable_hash
      comment_serialized['name'] = comment.user.name
      comment_serialized
    end
      # byebug
      comments
  end

  def opponent_pic
    User.find(instance_options[:session] == object.receiver_id ? object.sender_id : object.receiver_id).avatar_url || ""
  end

end


#add club_name > maybe redundant????

# belongs_to :club, serializer: ClubMatchSerializer
  # belongs_to :user
  # belongs_to :sender, class_name: 'User', foreign_key: 'sender_id'
  # belongs_to :receiver, class_name: 'User', foreign_key: 'receiver_id'