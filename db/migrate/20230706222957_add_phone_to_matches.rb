class AddPhoneToMatches < ActiveRecord::Migration[6.1]
  def change
    add_column :matches, :phone, :string
  end
end
