class ChangeDataTypesInMatches < ActiveRecord::Migration[6.1]
  def change
        change_column :matches, :user_id, 'integer USING user_id::integer'
        change_column :matches, :club_id, 'integer USING club_id::integer'
      end
    end
 
