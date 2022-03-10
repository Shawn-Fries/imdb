import React from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from '../../../app/assets/images/imdb_logo.png'
import spiderman from '../../../app/assets/images/spiderman.png'

class Movie extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            body: '',
            rating: 1,
            author_id: this.props.user.id,
            movie_id: 1
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReview = this.handleReview.bind(this)
    }

    componentDidMount() {
       this.props.fetchMovie(this.props.match.params.movieId)
       this.props.fetchReviews(this.props.match.params.movieId)
    }

    handleReview(type) {
        return (e) => {
            if (type === 'rating') {
                this.setState({ rating: parseInt(e.target.value)})
            } else {
                this.setState({ [type]: e.target.value })
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        this.props.createReview(this.props.match.params.movieId, this.state)
        console.log(this.props.reviews)
        this.props.fetchReviews(this.props.match.params.movieId)

    }

    render() {
        let description = ''
        let title = ''
        let genre = ''
        let release_date = ''
        if (this.props.movie) {
            description = this.props.movie.description
            title = this.props.movie.title
            release_date = this.props.movie.release_date
            genre = this.props.movie.genre

        }
        let reviews = []
        if (this.props.reviews) {
            console.log(reviews)
            reviews = Object.values(this.props.reviews)
            console.log(reviews)
        }
        return (
            <div>
                {"\n"}
                <img src={logo} />
                {"\n"}
                <h2>{title}</h2>
                {"\n"}
                <h3>{genre}</h3>
                {"\n"}
                <h3>{release_date.substring(0, 10)}</h3>
                {"\n"}
                <h3>{description}</h3>
                {"\n"}
                <img src={spiderman}/>
                {"\n"}
                <h2>Reviews</h2>
                {"\n"}
                {reviews.map(review => (
                    <div key={review.id}>
                        <h2>Author: {review.author_id}</h2>
                        {"\n"}
                        <h3>Review: {review.body}</h3>
                        {"\n"}
                        <h3>Rating: {review.rating}</h3>
                    </div>
                ))}
                <h2>Create a New Review</h2>
                <div className="review-form">
                    <form>
                        <div>
                        <label>Review
                            <textarea onChange={this.handleReview('body')} />
                        </label>
                        </div>
                        {" \n "}
                        <label>Rating
                            <div>
                                <label>1
                                    <input type="radio" id="1" name="rating" value="1" onChange={this.handleReview('rating')}/>
                                </label>
                            </div>

                            <div>
                                <label>2
                                    <input type="radio" id="2" name="rating" value="2" onChange={this.handleReview('rating')}/>
                                </label>
                            </div>

                            <div>
                                <label>3
                                    <input type="radio" id="3" name="rating" value="3" onChange={this.handleReview('rating')}/>
                                </label>
                            </div>

                            <div>
                                <label>4
                                    <input type="radio" id="4" name="rating" value="4" onChange={this.handleReview('rating')}/>
                                </label>
                            </div>

                            <div>
                                <label>5
                                    <input type="radio" id="5" name="rating" value="5" onChange={this.handleReview('rating')}/>
                                </label>
                            </div>

                            <div>
                                <label>6
                                    <input type="radio" id="6" name="rating" value="6" onChange={this.handleReview('rating')}/>
                                </label>
                            </div>

                            <div>
                                <label>7
                                    <input type="radio" id="7" name="rating" value="7" onChange={this.handleReview('rating')}/>
                                </label>
                            </div>

                            <div>
                                <label>8
                                    <input type="radio" id="8" name="rating" value="8" onChange={this.handleReview('rating')}/>
                                </label>
                            </div>

                            <div>
                                <label>9
                                    <input type="radio" id="9" name="rating" value="9" onChange={this.handleReview('rating')}/>
                                </label>
                            </div>

                            <div>
                                <label>10
                                    <input type="radio" id="10" name="rating" value="10" onChange={this.handleReview('rating')}/>
                                </label>
                            </div>
                        </label>
                    </form>
                    <button onClick={this.handleSubmit}>Submit Review</button>
                    {"\n"}
                </div>
            </div>
        )
    }
}

export default Movie