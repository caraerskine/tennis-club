class Comment < ApplicationRecord

    validates :content, presence: true

    belongs_to :user
    belongs_to :match

end

#sender and recevier too ?

# belongs_to :sender, foreign_key: :sender_id, class_name: 'User'
# belongs_to :receiver, foreign_key: :receiver_id, class_name: 'User'