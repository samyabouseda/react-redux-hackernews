import React, {Component} from 'react'
import { connect } from 'react-redux'
import { doFetchStories } from "../../actions/story"
import { SearchBar } from '../SearchBar/index'

class SearchStories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
        }
    }

    render() {
        return (
            <SearchBar
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                query={this.state.query}
            />
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
