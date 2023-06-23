class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :match_id, :comment
end
