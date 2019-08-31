class CreateConcerts < ActiveRecord::Migration[5.2]
  def change
    create_table :concerts do |t|
      t.references :artist, foreign_key: true
      t.datetime :on_sale_datetime
      t.datetime :datetime
      t.string :venue_name
      t.string :venue_city
      t.string :venue_region
      t.string :venue_country

      t.timestamps
    end
  end
end
