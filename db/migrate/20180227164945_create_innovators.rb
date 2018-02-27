class CreateInnovators < ActiveRecord::Migration[5.1]
  def change
    create_table :innovators do |t|
      t.string :job
      t.text :description
      t.string :picture

      t.timestamps
    end
  end
end
