import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import Select from 'react-select';
import {searchMovie} from "../../store/actions/movie";

const options = [
    {label: 'All', value: 'all'},
    {label: 'Movie', value: 'movie'},
    {label: 'Series', value: 'series'},
    {label: 'Episode', value: 'episode'}
]


// const filter = require('/public/filter.svg')

const Search = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const [yearInput, setYearInput] = useState('')
    const [filterVisible, setFilterVisible] = useState(false)
    const [select, setSelect] = useState('all')

    function onChangeSearchInput(value) {
        setSearchText(value)
    }

    function onChangeYearInput(value) {
        setYearInput(value)
    }

    function onChangeSelect(value) {
        setSelect(value.value)
    }

    function search() {
        let data = {query: searchText}
        if (yearInput !== '') {
            data.year = yearInput
        }
        if (select !== 'all') {
            data.type = select
        }
        dispatch(searchMovie(data))
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


                    <button onClick={() => setFilterVisible(!filterVisible)}>Filter</button>
                    <button onClick={() => search()}>Search</button>
                </div>
                {
                    !filterVisible &&
                    <div className={'filterArea'}>
                        <input placeholder="Year"
                               style={{width: 100}}
                               onChange={(e) => onChangeYearInput(e.target.value)}
                               value={yearInput}/>
                        <Select className="select"
                                classNamePrefix="select"
                                defaultValue={options[0]}
                                isDisabled={false}
                                isClearable={true}
                                isSearchable={false}
                                name="type"
                                onChange={onChangeSelect}
                                options={options}/>
                    </div>
                }
            </div>
            <div className={'triangle'}/>
        </div>
    );
};

export default Search;
