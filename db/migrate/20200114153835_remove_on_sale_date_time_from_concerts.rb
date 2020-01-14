class RemoveOnSaleDateTimeFromConcerts < ActiveRecord::Migration[5.2]
  def change
    remove_column :concerts, :on_sale_datetime, :datetime
  end
end
