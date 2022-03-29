class Showtime < ApplicationRecord
    validates :theater_id, :movie_id, :zip_code, :time, presence: true

    belongs_to: :movie,
        foreign_key: :movie_id,
        class_name: :Movie
end
