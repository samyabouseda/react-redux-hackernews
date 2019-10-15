import deepFreeze from 'deep-freeze'
import storyReducer from './story'

describe('story reducer', () => {
    it('adds stories to the story state', () => {
        const stories = ['a', 'b', 'c']
        const action = {
            type: 'STORIES_ADD',
            stories,
        }
        const previousState = { stories: [], error: null }
        const expectedState = { stories: stories, error: null }
        deepFreeze(previousState)
        const newState = storyReducer(previousState, action)
        expect(newState).toEqual(expectedState)
    })
})

// One test could verify that an error object is set when an error occurs and
// another test that verifies that the error object is set to null when stories are successfully added to the state.