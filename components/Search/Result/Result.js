import React from 'react';
import MovieCard from "../../MovieCard/MovieCard";
import {setPage} from "../../../store/actions/movie";
import {useDispatch, useSelector} from "react-redux";

const Result = ({id, title, movies}) => {
    const dispatch = useDispatch()
    const page = useSelector(state => state.movie.page)
    const totalPage = useSelector(state => state.movie.totalPage)
    return (
        <div className={'suggestion'} id={id}>
            <h4 className={'title'}>
                #{title}
            </h4>
            <div className={'films'}>
                {movies.map((film, index) => {
                    return (<MovieCard filmObject={film} filmId={false} style={{height: 150}} key={index}/>)
                })}
            </div>
            <div className={'pagination'}>
                {page > 1 ? <button onClick={() => dispatch(setPage(page - 1))}>Back</button> : <div></div>}
                {totalPage !== page && <button onClick={() => dispatch(setPage(page + 1))}>Next</button>}
            </div>
        </div>
    );
};

export default Result;
