class RemoveColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :matches, :time, :date
  end
end
