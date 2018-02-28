class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :workshop
      t.string :oneonone
      t.string :description
      t.string :picture
      t.references :user, foreign_key: true
      t.references :innovator, foreign_key: true

      t.timestamps
    end
  end
end
