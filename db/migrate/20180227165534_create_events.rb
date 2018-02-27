class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      # t.enum :type
      t.string :description
      t.references :user, foreign_key: true
      t.references :innovator, foreign_key: true

      t.timestamps
    end
  end
end
