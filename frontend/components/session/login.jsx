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
        this.handleDemo = this.handleDemo.bind(this)
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

    handleDemo(e) {
        e.preventDefault()
        this.props.login({username: 'guestlogin', password: 'guestlogin'})
    }

    render() {
        return (
            <div>
                {"\n"}
                <Link to='/'>
                    <h1 id="splash-logo">MyMDb</h1>
                </Link>
            
            <div className="session-form">
                <h2>Sign-In</h2>
                <form>
                    <label>Username
                        <input value={this.state.username} onChange={this.handleInput('username')}/>
                    </label>
                        {" \n "}
                        {" \n "}
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                            {" \n "}
                        <button onClick={this.handleSubmit}>Sign-In</button>
                    </label>
                </form>
                <button onClick={this.handleDemo}>Demo Login</button>
                {"\n"}
                    <button id="signup"><Link to="/signup">Create your MyMDb Account</Link>
                    </button>
            </div>
            </div>
        )
    }
}

export default Login