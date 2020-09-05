import React, {useState, useEffect} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import {useRouter} from "next/router";

import Button from "../Common/Button/Button";
import RatingBar from "../Common/RatingBar/RatingBar";
import Crew from "./Crew/Crew";

import {
    addFilmToWatchList,
    deleteFilmFromWatchList,
    isOnWatchList
} from "../../helper/helper";
import {fetchMovie} from "../../store/actions/movie";
import {useDispatch, useSelector} from "react-redux";


export default function MovieDetail() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [id, setId] = useState(router.query.id)
    const [_isOnWatchList, set_IsOnWatchList] = useState(isOnWatchList(id))
    const dispatch = useDispatch()
    const movie = useSelector(state => state.movie.movie)


    useEffect(() => {
        getMovie(router.query.id);
    }, [])


    function getMovie(id) {
        new Promise((resolve, reject) => {
            dispatch(fetchMovie(id))
            resolve();
        }).then(() => {
            setIsLoading(false)
        })
    }

    function addToWatchList() {
        addFilmToWatchList(id);
        set_IsOnWatchList(isOnWatchList(id))
    }

    function deleteFromWatchList() {
        deleteFilmFromWatchList(id);
        set_IsOnWatchList(isOnWatchList(id))

    }

    return (

        <div className={"movieDetailContainer"}>
            {

                isLoading ? <ClipLoader
                        size={150}
                        color={"#ff6600"}
                        css={
                            `margin: auto`
                        }
                    /> :
                    <div className={"movieDetail"}>
                        <div className={"movieImg"}>
                            <img src={movie.Poster} alt=""/>
                            <div className={_isOnWatchList ? "movieImgButton redButton" : "movieImgButton"}
                                 onClick={_isOnWatchList ? () => deleteFromWatchList() : () => addToWatchList()}>{_isOnWatchList ? "-" : "+"}</div>
                        </div>
                        <div className={"movieInfoContainer"}>
                            <div className={"movieDetailInfoTopSide"}>
                                <div className="movieName">
                                    {movie.Title}
                                </div>
                                <div className={"movieDetailRating"}>
                                    <CountUp start={0.00} end={parseFloat(movie.imdbRating)} decimal="," decimals={1}
                                             duration={2}/>
                                </div>
                            </div>
                            <RatingBar rate={movie.imdbRating} width={'100%'}/>

                            <div className="movieOtherInfo">
                                {movie.Year} &middot; {movie.Genre} &middot; {movie.Runtime}
                            </div>
                            <div className="movieStoryline">
                                {movie.Plot}
                            </div>
                            <Crew actors={movie.Actors} directors={movie.Director} writers={movie.Writer}/>

                            <Button text={_isOnWatchList ? "- REMOVE FROM WATCHLIST" : "+ ADD TO WATCHLIST"}
                                    isBackgroundRed={_isOnWatchList}
                                    onClick={_isOnWatchList ? () => deleteFromWatchList() : () => addToWatchList()}/>

                        </div>

                    </div>
            }

        </div>
    );

}