import React from 'react'
import { Link } from 'react-router-dom'
import Search from './search'
// import spiderman from '/app/assets/images/spiderman.png'
// import { Carousel } from 'react-responsive-carousel'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default () => (
    <div className="splash">
        <Link to='/'>
            <h1 id="splash-logo">MyMDb</h1>
        </Link>
        <Search></Search>
        <Link className="signin-link" to="/login">Sign In</Link>
        <div className="showtimes-link">
            <Link to="/showtimes">Showtimes near you</Link>
        </div>
        <div className='movie_image'>
            <Link to="/movies/1">
                <img src={window.licoricePizzaURL} />
            </Link>
        </div>
        <div className='movie_image'>
                    <Link to="/movies/2">
                        <img src={window.spidermanURL} />
                    </Link>
        </div>
        <div className='movie_image'>
                    <Link to="/movies/3">
                        <img src={window.goodBadURL} />
                    </Link>
        </div>
        <div className='movie_image'>
            <Link to="/movies/4">
                <img src={window.topGunURL} />
            </Link>
        </div>
    </div>
)