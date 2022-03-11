import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from "../actions/reviews"

export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_REVIEW:
            return Object.assign({}, state, { [action.review.id]: action.review })
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, action.reviews)
        default:
            return state
    }
}