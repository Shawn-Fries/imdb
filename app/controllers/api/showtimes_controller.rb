class Api::ShowtimesController < ApplicationController
    def show
        @showtimes = Showtime.where(theater_id: Showtime.find_closest_theater(params[:zip_code]))
    end

    # private
    # def showtime_params
    #     params.require(:showtime).permit(:theater_id) # Add to if needed
    # end
end
