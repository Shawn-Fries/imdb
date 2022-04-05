class Showtime < ApplicationRecord
    validates :theater_id, :movie_id, :zip_code, :time, presence: true

    belongs_to :movie,
        foreign_key: :movie_id,
        class_name: :Movie

    def find_closest_theater(zip_code)
        Showtime.select('theater_id').order(`CAST(zip_code AS INTEGER) - CAST(#{zip_code} AS INTEGER)`).first
    end
end
