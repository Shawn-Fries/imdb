import React from 'react'
import ReactDOM from 'react-dom'
//import configureStore

//import Root from 

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    const store = configureStore();

    ReactDOM.render(<Root store={store}/>, root)
})