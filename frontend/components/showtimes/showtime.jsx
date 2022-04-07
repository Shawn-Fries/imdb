import React from 'react'
import { Link } from 'react-router-dom'
// import spiderman from '/app/assets/images/spiderman.png'

class Showtime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theaterId: 1,
            zipCode: '00000'
        }
    }

    componentDidMount() {
        this.props.fetchShowtimes(this.state.zipCode)
    }

    render() {
        // let description = ''
        // let title = ''
        // let genre = ''
        // let release_date = ''
        // if (this.props.movie) {
        //     description = this.props.movie.description
        //     title = this.props.movie.title
        //     release_date = this.props.movie.release_date
        //     genre = this.props.movie.genre

        // }
        // let reviews = []
        // if (this.props.reviews) {
        //     reviews = Object.values(this.props.reviews)
        // }
        return (
            <div className="showtime">
                <div id="info">
                    <div>
                        <h1 id="splash-logo">IMDb Clone</h1>
                    </div>
                    <div>
                        <Link className="signin-link" to="/login">Sign In</Link>
                    </div>
                    <div id="showtime">
                        <h2>{this.props.showtime}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Showtime