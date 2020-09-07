import * as types from '../types'

const initialState = {
    movies: [],
    movie: {
        imdbRating: 0
    },
    watchList: [],
    page: 1,
    totalPage: 0
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
        case types.SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case types.SEARCH_MOVIE:
            return {
                ...state,
                movies: action.payload.Search,
                totalPage: parseInt(action.payload.totalResults / 10)
            }
        default:
            return state
    }
}
