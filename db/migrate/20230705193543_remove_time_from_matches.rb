class RemoveTimeFromMatches < ActiveRecord::Migration[6.1]
  def change
    remove_column :matches, :datetime, :time
  end
end
