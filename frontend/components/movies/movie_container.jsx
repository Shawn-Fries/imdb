import React from 'react'
import { connect } from 'react-redux'
import { movie } from '../../actions/movies'
import Movie from './login'

const mapStateToProps = state => ({
    movie: Object.assign(state.entities.movie)
})

const mapDispatchToProps = dispatch => ({
    movie: movieId => dispatch(movie(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);