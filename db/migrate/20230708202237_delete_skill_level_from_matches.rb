class DeleteSkillLevelFromMatches < ActiveRecord::Migration[6.1]
  def change
    remove_column :matches, :skill_level
  end
end
