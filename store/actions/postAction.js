import * as types from '../types'
import axios from 'axios'
import {API_URL} from "../../config/config";

export const fetchPosts = () => async dispatch => {

    const res = await axios.get(API_URL)
    dispatch({
        type: types.GET_POSTS,
        payload: ['selam']
    })
}
