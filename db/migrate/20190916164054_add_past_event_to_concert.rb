class AddPastEventToConcert < ActiveRecord::Migration[5.2]
  def change
    add_column :concerts, :past_event, :boolean
  end
end
