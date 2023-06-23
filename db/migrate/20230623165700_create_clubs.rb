class CreateClubs < ActiveRecord::Migration[6.1]
  def change
    create_table :clubs do |t|
      t.string :club_name
      t.string :street
      t.string :description

      t.timestamps
    end
  end
end
