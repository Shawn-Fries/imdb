import React from 'react'
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute} from '../utils/route_util'
import Splash from './splash/splash'
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'

export default () => (
    <div>
        <Route exact path="/" component={Splash}/>
        {/* <Route path="/movies" component={MovieContainer} /> */}
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
    </div>
)