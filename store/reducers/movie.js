import * as types from '../types'

const initialState = {
    movies: [],
    movie: {}
}

export const movie = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state
    }
}
