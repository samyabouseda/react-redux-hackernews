import React from 'react'
import './App.css'
import PropTypes from 'prop-types'
import Stories from './Stories'
import SearchStories from './SearchStories';

const App = () =>
        <div className='app'>
            <div className='interactions'>
                <SearchStories />
                <Stories />
            </div>
        </div>

App.propTypes = {
    stories: PropTypes.array,
}

export default App
