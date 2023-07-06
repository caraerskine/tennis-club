class AddMatchDateToMatches < ActiveRecord::Migration[6.1]
  def change
    add_column :matches, :match_date, :date
  end
end
