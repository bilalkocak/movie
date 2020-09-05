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
