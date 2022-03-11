import { getReviews, getReview, postReview } from '../utils/reviews'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const fetchReviews = movieId => dispatch => (
    getReviews(movieId)
        .then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchReview = (movieId, reviewId) => dispatch => (
    getReview(movieId, reviewId)
        .then(review => dispatch(receiveReviews(review)))
)

export const createReview = (movieId, review) => dispatch => (
    postReview(movieId, review)
        .then(() => dispatch(receiveReview(review)))
)