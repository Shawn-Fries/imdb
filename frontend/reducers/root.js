import { combineReducers } from 'redux'
import sessionReducer from './session'
import moviesReducer from './movies'
import reviewsReducer from './reviews'
import showtimesReducer from './showtimes'

export default combineReducers({
    movies: moviesReducer,
    reviews: reviewsReducer,
    showtimes: showtimesReducer,
    session: sessionReducer
})