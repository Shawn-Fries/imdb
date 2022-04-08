import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// import spiderman from '/app/assets/images/spiderman.png'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import goodBad from '/app/assets/images/good_bad.jpg';
// import goodBad from 'assets/images/good_bad';
// import goodBad from 'assets/images/good_bad';

// const history = useHistory();

const images = [{ src: require('./images/licorice_pizza.jpg'), link: "/movies/1"},
    { src: require('./images/spiderman.png'), link: "/movies/2" },
    { src: require('./images/good_bad.jpg'), link: "/movies/3" }
];

export default () => (
    <div className="splash">
        <h1 id="splash-logo">IMDb Clone</h1>
        {/* <Search/> */}
        <Link className="signin-link" to="/login">Sign In</Link>
        <Link className="showtimes-link" to="/showtimes">Showtimes</Link>
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows direction='horizontal'>
                {images.map(image => (
                    <img src={image.src} onChange={() => history.push(item.link)}/>
                ))}
            </Carousel>
        </div>
    </div>
)