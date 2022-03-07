import React from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from '../../../app/assets/images/imdb_logo.png'

class Movie extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     movie: {}
        // }
       // this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
       // this.setState({movie: this.props.fetchMovie(this.props.movieId)})
        // console.log(this.state.movie)
        // let a = this.setState({movie: this.props.fetchMovie(this.props.match.params.movieId)})
        let a = this.props.fetchMovie(this.props.match.params.movieId)
        console.log(a)
        console.log(this.state)
        console.log(this.props.movies)
        // // console.log(this.props)
       // console.log(this.state)
        // console.log(this.state)
        // console.log(this.props)
        // console.log(a)
    }

    // handleInput(type) {
    //     return (e) => {
    //         this.setState({ [type]: e.target.value })
    //     }
    // }

    // handleSubmit(e) {
    //     e.preventDefault()
    //     // this.props.createNewUser(this.state)
    //     //     .then(() => this.props.history.push('/'))
    // }

    render() {
        return (
            <div>
                {"\n"}
                <img src={logo} />
                {/* {this.props.movieId} */}
                <h1>{this.props.movies.title}</h1>
                
{/* 
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
                    <Link to="/">Return to Home Screen</Link>
                </div> */}
            </div>
        )
    }
}

export default Movie