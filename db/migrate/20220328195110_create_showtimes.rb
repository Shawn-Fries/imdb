class CreateShowtimes < ActiveRecord::Migration[5.2]
  def change
    create_table :showtimes do |t|
      t.integer :theater_id, null: false
      t.integer :movie_id, null: false
      t.string :zip_code, null: false
      t.datetime :time, null: false

      t.timestamps
    end
  end
end
