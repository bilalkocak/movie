import React, {useState} from 'react';


const Search = () => {
    const [searchText, setSearchText] = useState('')

    function onChangeSearchInput(value) {
        setSearchText(value)
    };

    return (
        <div className={'mainPageSearchSection'}>
            <div className={'searchPageTitle'}>
                <h1>
                    OMDb
                </h1>
                <h3>
                    The Open Movie Database
                </h3>
            </div>
            <div className={'searchArea'}>
                <input placeholder="input search text"
                       onChange={(e) => onChangeSearchInput(e.target.value)}
                       value={searchText}/>
                <button>Ara</button>
            </div>
        </div>
    );
};

export default Search;
