import { RECEIVE_SHOWTIMES } from "../actions/showtimes"

export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SHOWTIMES:
            return Object.assign({}, state, action.showtimes)
        default:
            return state
    }
}