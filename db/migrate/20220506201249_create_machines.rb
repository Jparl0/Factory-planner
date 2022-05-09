class CreateMachines < ActiveRecord::Migration[6.1]
  def change
    create_table :machines do |t|
      t.integer :voltage
      t.integer :output
      t.integer :input

      t.timestamps
    end
  end
end
