import React, {Component} from 'react'
import { connect } from 'react-redux'
import { doFetchStories } from "../actions/story"
import Button from './Button'

class SearchStories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type='text'
                    value={this.state.query}
                    onChange={this.onChange}
                />
                <Button type='submit'>
                    Search
                </Button>
            </form>
        )
    }

    onSubmit = event => {
        const { query } = this.state
        if (query) {
            this.props.onFetchStories(query)
            this.setState(this.applyQueryState(''))
        }
        event.preventDefault()
    }

    onChange = event => {
        const { value } = event.target
        this.setState(this.applyQueryState(value))
    }

    applyQueryState = query => () => ({
        query
    })
}

const mapDispatchToProps = dispatch => ({
    onFetchStories: query => dispatch(doFetchStories(query))
})

export default connect(
    null,
    mapDispatchToProps,
)(SearchStories)
