class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :avatar_url
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
