class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar_url, :username, :password_digest
end
