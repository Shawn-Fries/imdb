import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute} from '../utils/route_util'
import Splash from './splash/splash'
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'

export default () => (
    <div>
        <Route path="/" component={Splash}/>
        <Switch>
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/" component={LoginContainer} />
        </Switch>
    </div>
)