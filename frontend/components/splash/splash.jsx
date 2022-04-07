import React from 'react'
import { Link } from 'react-router-dom'
// import spiderman from '/app/assets/images/spiderman.png'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

//const images = [{img}]

export default () => (
    <div className="splash">
        <h1 id="splash-logo">IMDb Clone</h1>
        {/* <Search/> */}
        <Link className="signin-link" to="/login">Sign In</Link>
        <Link className="showtimes-link" to="/showtimes">Showtimes</Link>
        <div className="carousel-wrapper">
            <Carousel direction='horizontal'>
                <div>
                <Link to="/movies/1">
                    <div>
                        <img src={window.licoricePizzaURL} />
                    </div>
                </Link>
                </div>
                <div>
                    <Link to="/movies/2">
                        <div>
                            <img src={window.spidermanURL} />
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/movies/3">
                        <div>
                            <img src={window.goodBadURL} />
                        </div>
                    </Link>
                </div>
            </Carousel>
        </div>
    </div>
)