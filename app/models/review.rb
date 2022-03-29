class Review < ApplicationRecord
    validates :rating, :body, :author_id, :movie_id, presence: true


    belongs_to :movie,
        foreign_key: :movie_id,
        class_name: :Movie
end
