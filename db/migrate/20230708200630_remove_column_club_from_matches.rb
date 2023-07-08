class RemoveColumnClubFromMatches < ActiveRecord::Migration[6.1]
  def change
    remove_column :matches, :club
  end
end
