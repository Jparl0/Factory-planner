class CreateOres < ActiveRecord::Migration[6.1]
  def change
    create_table :ores do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :machine, null: false, foreign_key: true
      t.string :type
      t.string :purity

      t.timestamps
    end
  end
end
