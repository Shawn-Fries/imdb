import { connect } from 'react-redux'
import { fetchMovie } from '../../actions/movies'
import Movie from './movie'

const mapStateToProps = (state) => ({
    //movieId: parseInt(match.params.movieId)
    movies: Object.values(state.movies)
})

const mapDispatchToProps = dispatch => ({
    fetchMovie: movieId => dispatch(fetchMovie(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);