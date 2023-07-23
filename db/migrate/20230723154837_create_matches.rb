class CreateMatches < ActiveRecord::Migration[6.1]
  def change
    create_table :matches do |t|
      t.integer "sender_id"
      t.integer "receiver_id"
      t.integer "user_id"
      t.integer "club_id"
      t.string "status"
      t.datetime "datetime"
      t.string "phone"
      t.boolean "skill_level"
      
      t.timestamps
    end
  end
end
