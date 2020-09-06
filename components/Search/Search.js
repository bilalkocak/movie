import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {searchMovie} from "../../store/actions/movie";


const Search = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')

    function onChangeSearchInput(value) {
        setSearchText(value)
    }

    function search() {
        dispatch(searchMovie({query: searchText}))
    }

    return (
        <div className={'mainPageSearchSection'}>
            <div className="content">
                <div className={'searchPageTitle'}>
                    <h1>
                        OMDb
                    </h1>
                    <h3>
                        The Open Movie Database
                    </h3>
                    <div>
                        <a href="#top10">Top10</a>
                        <a href="#editors">Editor's choices</a>
                    </div>
                </div>
                <div className={'searchArea'}>
                    <input placeholder="Search movie..."
                           onChange={(e) => onChangeSearchInput(e.target.value)}
                           value={searchText}/>
                    <button onClick={() => search()}>Search</button>
                </div>
            </div>
            <div className={'triangle'}/>
        </div>
    );
};

export default Search;
