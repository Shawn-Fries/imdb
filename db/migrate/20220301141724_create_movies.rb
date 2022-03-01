class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :genre, null: false
      t.datetime :release_date, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :movies, :title
    add_index :movies, :genre
  end
end
