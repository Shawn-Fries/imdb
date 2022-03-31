class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.where(movie_id: params[:movie_id])
        render :index
    end

    def show
        @review = Review.find(params[:id])
    end

    def create
        @review = Review.new(review_params)
        print review_params
        if @review.save
            @reviews = Review.where(movie_id: params[:movie_id])
            render :index
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(:body, :rating, :author_id, :movie_id)
    end
end
