class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :rating, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :movie_id, null: false

      t.timestamps
    end
    add_index :reviews, :rating
    add_index :reviews, :movie_id
    add_index :reviews, :author_id
  end
end
