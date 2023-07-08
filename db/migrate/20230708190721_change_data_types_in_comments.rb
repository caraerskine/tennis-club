class ChangeDataTypesInComments < ActiveRecord::Migration[6.1]
  def change
    change_column :comments, :user_id, 'integer USING user_id::integer'
    change_column :comments, :match_id, 'integer USING match_id::integer'
  end
end
