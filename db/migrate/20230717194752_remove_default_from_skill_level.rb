class RemoveDefaultFromSkillLevel < ActiveRecord::Migration[6.1]
  def change
    change_column :matches, :skill_level, :boolean
  end
end
