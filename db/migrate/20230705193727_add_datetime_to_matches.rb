class AddDatetimeToMatches < ActiveRecord::Migration[6.1]
  def change
    add_column :matches, :datetime, :datetime
  end
end
