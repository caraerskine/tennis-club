class RemoveContactInfoFromMatches < ActiveRecord::Migration[6.1]
  def change
    remove_column :matches, :contact_info, :string
  end
end
