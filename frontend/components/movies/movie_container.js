import { connect } from 'react-redux'
import { fetchMovie } from '../../actions/movies'
import { fetchReviews, createReview } from '../../actions/reviews'
import Movie from './movie'

const mapStateToProps = (state, ownProps) => ({
    //movieId: parseInt(match.params.movieId)
    movie: state.movies[ownProps.match.params.movieId],
    reviews: state.reviews,
    user: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    fetchMovie: movieId => dispatch(fetchMovie(movieId)),
    fetchReviews: movieId => dispatch(fetchReviews(movieId)),
    createReview: (movieId, review) => dispatch(createReview(movieId, review))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);