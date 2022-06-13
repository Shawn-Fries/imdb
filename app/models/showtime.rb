class Showtime < ApplicationRecord
    validates :theater_id, :movie_id, :zip_code, :time, presence: true

    belongs_to :movie,
        foreign_key: :movie_id,
        class_name: :Movie

    def self.find_closest_theater(comparison_zip)
        find_by_sql([
            'SELECT *
            FROM showtimes
            WHERE ABS(CAST(zip_code AS INTEGER) - CAST(? AS INTEGER)) = (SELECT ABS(CAST(zip_code AS INTEGER) - CAST(? AS INTEGER)) AS min FROM showtimes ORDER BY ABS(CAST(zip_code AS INTEGER) - CAST(? AS INTEGER)) LIMIT 1)
            ',
            comparison_zip, comparison_zip, comparison_zip])
    end
end
