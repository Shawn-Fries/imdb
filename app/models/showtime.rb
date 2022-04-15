class Showtime < ApplicationRecord
    validates :theater_id, :movie_id, :zip_code, :time, presence: true

    belongs_to :movie,
        foreign_key: :movie_id,
        class_name: :Movie

    def self.find_closest_theater(comparison_zip)
        Showtime.select('theater_id').order(`ABS(CAST(zip_code AS INTEGER) - CAST(#{comparison_zip} AS INTEGER))`).first
    end
end
