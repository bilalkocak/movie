import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {API_URL} from "../../config/config";
import RatingBar from "../Common/RatingBar/RatingBar";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from 'react-countup';
import Link from "next/link";
import Button from "../Common/Button/Button";


const MovieCard = ({filmId, filmObject}) => {
    const [filmData, setFilmData] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (!filmId) {
            setFilmData(filmObject)
            setLoading(false)
        } else {
            axios.get(`${API_URL}i=${filmId}`).then(res => {
                setFilmData(res.data)
                setLoading(false)
            })
                .catch(error => error.log)
        }
    }, [])
    return (
        <>
            {
                loading ? <ClipLoader
                    size={150}
                    css={
                        `margin: auto`
                    }
                /> : (
                    <div className={"movieCard"}>
                        <div className={"movieImg"}>
                            <img src={filmData.Poster} alt=""/>
                        </div>
                        <div className={"movieInfoContainer"}>
                            <div className="movieName">
                                {filmData.Title}
                            </div>
                            <div className="movieOtherInfo">
                                {filmData.Year} &middot; {filmId ? filmData.Genre : filmData.Type} {filmId && <>&middot; {filmData.Runtime}</>}
                            </div>
                            {filmId &&
                            <>
                                <div className="movieRating">
                                        <span className="movieRate">
                                            <CountUp start={0.00} end={parseFloat(filmData.imdbRating)} decimal=","
                                                     decimals={1}
                                                     duration={2}/>
                                           </span>/10 <strong style={{fontSize: 12}}>IMDB</strong>
                                </div>
                                <RatingBar rate={filmData.imdbRating} width={'100%'}/>
                            </>
                            }
                        </div>

                        <Link href={`detail?id=${filmData.imdbID}`}>
                            <Button text={'MOVIE DETAILS'}/>
                        </Link>

                    </div>
                )
            }
        </>

    );
};

export default MovieCard;
