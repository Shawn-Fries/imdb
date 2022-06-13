#require 'byebug'

class Api::ShowtimesController < ApplicationController
    def show
        @showtimes = Showtime.find_closest_theater(params[:id])
    end

    # private
    # def showtime_params
    #     params.require(:showtime).permit(:id)
    # end
end
