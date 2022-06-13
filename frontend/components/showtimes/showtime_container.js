import { connect } from 'react-redux'
import { fetchShowtimes } from '../../actions/showtimes'
import Showtime from './showtime'

const mapStateToProps = state => ({
    zipCode: state.zipCode,
    showtimes: state.showtimes
})

const mapDispatchToProps = dispatch => ({
    fetchShowtimes: zipCode => dispatch(fetchShowtimes(zipCode))
});

export default connect(mapStateToProps, mapDispatchToProps)(Showtime);