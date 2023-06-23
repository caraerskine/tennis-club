class CreateMatches < ActiveRecord::Migration[6.1]
  def change
    create_table :matches do |t|
      t.string :sender_id
      t.string :receiver_id
      t.string :club
      t.datetime :date
      t.datetime :time
      t.string :skill_level
      t.string :contact_info
      t.string :user_id
      t.string :club_id
      t.string :status

      t.timestamps
    end
  end
end
