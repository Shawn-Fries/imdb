export const getReviews = movieId => (
    $.ajax({
        url: `/api/movies/${movieId}/reviews`
    })
)

export const getReview = (movieId, reviewId) => (
    $.ajax({
        url: `/api/movies/${movieId}/reviews/${reviewId}`
    })
)

export const postReview = (movieId, review) => (
    $.ajax({
        url: `/api/movies/${movieId}/reviews`,
        method: 'POST',
        data: {review}
    })
)