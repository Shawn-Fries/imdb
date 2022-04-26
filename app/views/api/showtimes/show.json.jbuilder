@showtimes.each do |showtime|
    json.set! showtime.id do
        json.extract! showtime, :id, :theater_id, :zip_code, :movie_id, :time, :movie
    end
end

