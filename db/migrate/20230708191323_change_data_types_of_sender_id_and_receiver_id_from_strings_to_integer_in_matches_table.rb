class ChangeDataTypesOfSenderIdAndReceiverIdFromStringsToIntegerInMatchesTable < ActiveRecord::Migration[6.1]
  def change
    change_column :matches, :sender_id, 'integer USING sender_id::integer'
    change_column :matches, :receiver_id, 'integer USING receiver_id::integer'
  end
end
