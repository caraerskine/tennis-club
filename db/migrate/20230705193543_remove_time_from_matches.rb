class RemoveTimeFromMatches < ActiveRecord::Migration[6.1]
  def change
    remove_column :matches, :time, :datetime
  end
end
