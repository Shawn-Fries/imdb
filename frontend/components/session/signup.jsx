import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
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
        this.props.createNewUser(this.state)
    }

    render() {
        return (
            <div className="session-form">
                <h2>Sign-Up</h2>
                <form>
                        <label>Username
                            <input value={this.state.username} onChange={this.handleInput('username')} />
                        </label>

                        <label>Password
                            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                        </label>
                    <button onClick={this.handleSubmit}>Create your IMDb Clone Account</button>
                </form>
                <Link to="/">Already have an account?</Link>
            </div>
        )
    }
}

export default Signup