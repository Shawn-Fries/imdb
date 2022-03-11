import { getMovie } from '../utils/movies'

export const RECEIVE_MOVIE = 'RECEIVE_MOVIE'

const receiveMovie = movie => ({
    type: RECEIVE_MOVIE,
    movie
})

export const fetchMovie = movieId => dispatch => (
    getMovie(movieId)
        .then(movie => dispatch(receiveMovie(movie)))
)