import React from 'react';
import MovieCard from "../MovieCard/MovieCard";

const Suggestion = ({id, title, films}) => {

    return (
        <div className={'suggestion'} id={id}>
            <h4 className={'title'}>
                #{title}
            </h4>
            <div className={'films'}>
                {films.map((film, index) => {
                    return (<MovieCard filmId={film} style={{height: 150}} key={index}/>)
                })}
            </div>
        </div>
    );
};

export default Suggestion;
