class Movie < ApplicationRecord
    validates :title, :genre, :release_date, :description, presence: true

end
