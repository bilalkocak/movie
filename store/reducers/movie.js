import * as types from '../types'

const initialState = {
    movies: [],
    movie: {
        imdbRating: 0
    },
    watchList: []
}

export const movie = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload
            }
        case types.DELETE_FROM_WATCH_LIST:
            return {
                ...state,
                watchList: action.payload
            }
        case types.ADD_TO_WATCH_LIST:
            return {
                ...state,
                watchList: action.payload
            }
        case types.GET_WATCH_LIST:
            return {
                ...state,
                watchList: action.payload
            }
        default:
            return state
    }
}
