class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer "user_id"
      t.integer "match_id"
      t.string "comment"
      t.string "content"
      
      t.timestamps
    end
  end
end
