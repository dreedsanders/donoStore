class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.integer :user_id
      t.string :category
      t.float :asking_price
      t.string :image

      t.timestamps
    end
  end
end
