import React from 'react'
import { Link } from 'react-router-dom'
// import spiderman from '/app/assets/images/spiderman.png'

class Showtime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theaterId: 1,
            zipCode: '37901'
        }
        this.handleZip = this.handleZip.bind(this)
    }

    componentDidMount() {
        this.props.fetchShowtimes(this.state.zipCode)
    }

    handleZip(e) {
        e.preventDefault()
        this.setState({ zipCode: this.props.zipCode })
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
        let showtimes = []
        if (this.props.showtimes) {
            showtimes = Object.values(this.props.showtimes)
        }
        return (
            <div className="showtime">
                <div id="info">
                    <div>
                        <h1 id="splash-logo">MyMDb</h1>
                    </div>
                    <div>
                        <Link className="signin-link" to="/login">Sign In</Link>
                    </div>
                    <div>
                        <label>Please enter your zip code
                            <input id="zipCode" name="zipCode" value={this.state.zipCode} onChange={this.handleZip} />
                        </label>

                    </div>
                    <div id="showtime">
                        {showtimes.map(showtime => (
                            <div key={showtime.id}>
                                <h3>{showtime.movie.title}</h3>
                                {"\n"}
                                <h3>{showtime.time.substring(11, 16)}</h3>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Showtime