class AddDefaultFalseBooleanToMatches < ActiveRecord::Migration[6.1]
  def change
    change_column :matches, :skill_level, :boolean, default: false
  end
end
