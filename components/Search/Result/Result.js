import React, {useEffect} from 'react';
import MovieCard from "../../MovieCard/MovieCard";

const Result = ({id, title, films}) => {
    return (
        <div className={'suggestion'} id={id}>
            <h4 className={'title'}>
                #{title}
            </h4>
            <div className={'films'}>
                {films.map((film, index) => {
                    return (<MovieCard filmObject={film} filmId={false} style={{height: 150}} key={index}/>)
                })}
            </div>
        </div>
    );
};

export default Result;
