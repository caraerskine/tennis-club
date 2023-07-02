class ClubMatchSerializer < ActiveModel::Serializer
  attributes :id, :club, :date, :time, :contact_info, :status
end
