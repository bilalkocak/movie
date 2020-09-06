import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import Suggestion from "../components/TopTen/Suggestion";
import {getWatchList} from "../store/actions/movie";
import {useDispatch, useSelector} from "react-redux";

const WatchList = () => {
    const dispatch = useDispatch()
    const watchList = useSelector(state => state.movie.watchList)
    useEffect(() => {
        dispatch(getWatchList())
    }, [])
    return (
        <Layout>
            <Suggestion title={'Watch List'} films={watchList}/>
        </Layout>
    );
};

export default WatchList;
