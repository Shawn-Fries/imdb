import React from 'react'
import { Link } from 'react-router-dom'
// import spiderman from '/app/assets/images/spiderman.png'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default () => (
    <div className="splash">
        <h1 id="splash-logo">IMDb Clone</h1>
        {/* <Search/> */}
        <Link className="signin-link" to="/login">Sign In</Link>
        <div className="carousel-wrapper">
            <Carousel direction='horizontal'>
                <div>
                <Link to="/movies/1">
                        <img src={window.licoricePizzaURL} />
                </Link>
                </div>
                <div>
                    <Link to="/movies/2">
                        <img src={window.spidermanURL} />
                    </Link>
                </div>
                <div>
                    <Link to="/movies/3">
                        <img src={window.goodBadURL} />
                    </Link>
                </div>
            </Carousel>
        </div>
    </div>
)