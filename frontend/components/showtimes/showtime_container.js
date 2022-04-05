import { connect } from 'react-redux'
import { fetchShowtimes } from '../../actions/showtimes'
import Showtime from './showtime'

const mapStateToProps = (state, ownProps) => ({
    zipCode: match.params.zipCode,
    //reviews: state.movies[ownProps.match.params.movieId]
    showtimes: state.showtimes
})

const mapDispatchToProps = dispatch => ({
    fetchShowtimes: zipCode => dispatch(fetchShowtimes(zipCode))
});

export default connect(mapStateToProps, mapDispatchToProps)(Showtime);