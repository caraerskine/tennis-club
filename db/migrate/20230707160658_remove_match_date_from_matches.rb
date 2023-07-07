class RemoveMatchDateFromMatches < ActiveRecord::Migration[6.1]
  def change
    remove_column :matches, :match_date, :date
  end
end
