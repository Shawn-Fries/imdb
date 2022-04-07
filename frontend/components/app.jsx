import React from 'react'
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute} from '../utils/route_util'
import Splash from './splash/splash'
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import MovieContainer from './movies/movie_container'
import ShowtimeContainer from './showtimes/showtime_container'

export default () => (
    <div>
        <Route exact path="/" component={Splash}/>
        <Route exact path="/movies/:movieId" component={MovieContainer} />
        <Route exact path="/showtimes" component={ShowtimeContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
    </div>
)