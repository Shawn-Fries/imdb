class ShowtimesController < ApplicationController
    def show
        @review = Review.where(theater_id: find_closest_theater(params[:zip_code]))
    end

    # private
    # def showtime_params
    #     params.require(:showtime).permit(:theater_id) # Add to if needed
    # end
end
