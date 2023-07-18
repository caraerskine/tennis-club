class ChangeDefaultFromFalseToNil < ActiveRecord::Migration[6.1]
  def change
    change_column_default :matches, :skill_level, from: false, to: nil
  end
end
