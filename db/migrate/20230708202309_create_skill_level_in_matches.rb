class CreateSkillLevelInMatches < ActiveRecord::Migration[6.1]
  def change
    add_column :matches, :skill_level, :boolean
  end
end
