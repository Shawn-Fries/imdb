import { getShowtimes } from '../utils/showtimes'

export const RECEIVE_SHOWTIMES = 'RECEIVE_SHOWTIMES'

const receiveShowtimes = showtimes => ({
    type: RECEIVE_SHOWTIMES,
    showtimes
})

export const fetchShowtimes = zipCode => dispatch => (
    getShowtimes(zipCode)
        .then(showtimes => dispatch(receiveShowtimes(showtimes)))
)