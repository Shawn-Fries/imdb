import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../app/assets/images/imdb_logo.png'

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
            .then(() => this.props.history.push('/'))
    }

    render() {
        return (
            <div>
                {"\n"}
                <img src={logo}/>
            
            <div className="session-form">
                
                <h2>Sign-Up</h2>
                <form>
                        <label>Username
                            <input value={this.state.username} onChange={this.handleInput('username')} />
                        </label>
                    {" \n "}
                        {" \n "}
                        <label>Password
                            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                        </label>
                        {" \n "}
                    <button onClick={this.handleSubmit}>Create your IMDb Clone Account</button>
                </form>
                    {" \n "}
                <Link to="/login">Already have an account?</Link>
            </div>
            </div>
        )
    }
}

export default Signup