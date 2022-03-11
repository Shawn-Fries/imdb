import { combineReducers } from 'redux'
import sessionReducer from './session'
import moviesReducer from './movies'
import reviewsReducer from './reviews'

export default combineReducers({
    movies: moviesReducer,
    reviews: reviewsReducer,
    session: sessionReducer
})