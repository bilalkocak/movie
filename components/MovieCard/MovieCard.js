import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {API_URL} from "../../config/config";
import RatingBar from "../Common/RatingBar/RatingBar";
import CountUp from 'react-countup';


const MovieCard = ({film}) => {
    const [filmData, setFilmData] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`${API_URL}i=${film}`).then(res => {
            setFilmData(res.data)
            setLoading(false)
        })
            .catch(error => error.log)
    }, [])
    return (
        <>
            {
                loading ? (<div>Loading</div>) : (
                    <div className={"movieCard"}>
                        <div className={"movieImg"}>
                            <img src={filmData.Poster} alt=""/>
                        </div>
                        <div className={"movieInfoContainer"}>
                            <div className="movieName">
                                {filmData.Title}
                            </div>
                            <div className="movieOtherInfo">
                                {filmData.Year} &middot; {filmData.Genre} &middot; {filmData.Runtime}
                            </div>
                            <div className="movieRating">
                                        <span className="movieRate">
                                            <CountUp start={0.00} end={parseFloat(filmData.imdbRating)} decimal=","
                                                     decimals={1}
                                                     duration={2}/>
                                           </span>/10 <strong style={{fontSize: 12}}>IMDB</strong>
                            </div>
                            <RatingBar rate={filmData.imdbRating} width={'100%'}/>
                        </div>

                        <button className={'button'} onClick={() => history.push('/movie-detail/' + filmData.id)}>
                            MOVIE DETAILS
                        </button>
                    </div>
                )
            }
        </>

    );
};

export default MovieCard;
