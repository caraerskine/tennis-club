# class MatchCommentSerializer < ActiveModel::Serializer
#   attributes :comments

#   def comments
#     object.comments.map do |comment|
#       comment_serialized = comment.serializable_hash
#       comment_serialized['name'] = comment.user.name
#       comment_serialized
#     end
#   end

# end

#this is going to live in user serizlier
#:attr called coments

#can delte later