class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :match_id, :comment, :content, :name

  def name
    object.user.name
  end

end
