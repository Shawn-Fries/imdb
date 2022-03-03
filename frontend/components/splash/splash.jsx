import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <div className="splash">
        <h1 id="splash-logo">IMDb Clone</h1>
        <Link className="signin-link" to="/login">Sign In</Link>
    </div>
)