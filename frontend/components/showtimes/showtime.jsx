import React from 'react'
import { Link } from 'react-router-dom'
// import spiderman from '/app/assets/images/spiderman.png'

class Showtime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theater_id: 1,
            zip_code: '00000'
        }
    }

    componentDidMount() {
        this.props.fetchShowtimes(this.props.match.params.userId)
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
            reviews = Object.values(this.props.reviews)
        }
        return (
            <div className="movie">
                <div id="info">
                    <div>
                        <h1 id="splash-logo">IMDb Clone</h1>
                    </div>
                    <div>
                        <Link className="signin-link" to="/login">Sign In</Link>
                    </div>
                    <div id="title">
                        <h2>{title}</h2>
                    </div>
                    <div id="release_date">
                        <h3>{release_date.substring(0, 4)}</h3>
                    </div>
                    <div id="genre">
                        <h3>{genre}</h3>
                    </div>
                    <div id="movie_image">
                        <img src={window.spidermanURL} />
                    </div>
                    <div id="description">
                        <h3>{description}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Showtime