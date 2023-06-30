class AddClubImgToClubs < ActiveRecord::Migration[6.1]
  def change
    add_column :clubs, :club_img, :string
  end
end
