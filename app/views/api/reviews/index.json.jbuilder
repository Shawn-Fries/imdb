@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :rating, :body, :movie_id, :author_id
    end
end

