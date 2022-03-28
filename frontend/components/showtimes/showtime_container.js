import { connect } from 'react-redux'
import { fetchReviews, createReview } from '../../actions/reviews'
import Review from './review'

const mapStateToProps = (state, ownProps) => ({
    //movieId: parseInt(match.params.movieId)
    //reviews: state.movies[ownProps.match.params.movieId]
    reviews: state.reviews
})

const mapDispatchToProps = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    createReview: review => dispatch(createReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);