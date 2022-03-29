class Movie < ApplicationRecord
    validates :title, :genre, :release_date, :description, presence: true

    has_many :reviews,
        foreign_key: :movie_id,
        class_name: :Review

    has_many :showtimes,
        foreign_key: :movie_id,
        class_name: :Showtime

end

