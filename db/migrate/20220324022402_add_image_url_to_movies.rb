class AddImageUrlToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :image_url, :string
  end
end
