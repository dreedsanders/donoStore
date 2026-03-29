class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transfers do |t|
      t.integer :buyer_id
      t.integer :seller_id
      t.integer :item_id
      t.float :amount
      t.timestamps
    end
  end
end
