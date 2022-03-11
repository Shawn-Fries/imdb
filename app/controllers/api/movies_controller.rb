class Api::MoviesController < ApplicationController
    def show
        @movie = Movie.find(params[:id])
    end

    # private
    # def movie_params
    #     params.require(:movie).permit(:title, :description, :genre, :release_date)
    # end
end
