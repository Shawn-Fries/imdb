import { RECEIVE_MOVIE } from "../actions/movies"

export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_MOVIE:
            return Object.assign({}, state, {[action.movie.id]: action.movie})
        default:
            return state
    }
}