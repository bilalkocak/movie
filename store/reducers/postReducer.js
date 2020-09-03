import * as types from '../types'

const initialState = {
    posts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.payload) {
        case types.GET_POSTS:
            return {
                ...state,
                posts:action.payload
            }
        default:
            return state
    }
}
