import * as types from '../types'
import axios from 'axios'
import {API_URL} from "../../config/config";

export const fetchMovie = (id) => async dispatch => {
    const res = await axios.get(`${API_URL}&i=${id}&plot=full`)
    dispatch({
        type: types.FETCH_MOVIE,
        payload: res.data
    })
}

export const searchMovie = (data) => async dispatch => {
    const res = await axios.get(`${API_URL}&s=${data.query}&plot=full&y=${data.year}`)
    dispatch({
        type: types.SEARCH_MOVIE,
        payload: res.data.Search
    })
}

export const addFilmToWatchList = (id) => dispatch => {
    let watchList = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];
    !watchList.includes(id) && watchList.push(id);
    localStorage.setItem('watchList', JSON.stringify(watchList))
    dispatch({
        type: types.ADD_TO_WATCH_LIST,
        payload: JSON.parse(localStorage.getItem("watchList"))
    })
}


export const deleteFilmFromWatchList = (id) => dispatch => {
    let watchList = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];
    watchList.includes(id) && watchList.splice(watchList.findIndex(movieId => movieId === id), 1);
    localStorage.setItem('watchList', JSON.stringify(watchList))
    dispatch({
        type: types.DELETE_FROM_WATCH_LIST,
        payload: JSON.parse(localStorage.getItem("watchList"))
    })
}

export const getWatchList = () => dispatch => {
    dispatch({
        type: types.GET_WATCH_LIST,
        payload: localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : []
    })
}
