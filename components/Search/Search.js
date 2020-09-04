import React, {useState} from 'react';


const Search = () => {
    const [searchText, setSearchText] = useState('')

    function onChangeSearchInput(value) {
        setSearchText(value)
    };

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
                    <button>Search</button>
                </div>
            </div>
            <div className={'triangle'}/>
        </div>
    );
};

export default Search;
