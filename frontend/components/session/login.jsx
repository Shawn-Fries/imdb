import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.login(this.state)
    }

    render() {
        return (
            <div className="session-form">
                <h2>Sign-In</h2>
                <form>
                    <label>Username
                        <input value={this.state.username} onChange={this.handleInput('username')}/>
                    </label>

                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                        <button onClick={this.handleSubmit}>Sign-In</button>
                    </label>
                </form>
                <Link to="/signup">Create your IMDb Clone Account</Link>
            </div>
        )
    }
}

export default Login