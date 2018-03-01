class AddNameToInnovators < ActiveRecord::Migration[5.1]
  def change
    add_column :innovators, :name, :string
  end
end
