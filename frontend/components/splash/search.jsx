import React from 'react'
import { Link } from 'react-router-dom'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search_term: ''
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput() {
        return (e) => {
            this.setState({ searchTerm: e.target.value })
        }
    }

    render() {
        return (
            <div>
                <input type='search'
                placeholder=''
                onChange={this.handleInput}
                />
            </div>
        )
    }
}

export default Search