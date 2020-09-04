import React from 'react';

const Search = () => {
    return (
        <div className={'mainPageSearchSection'}>
            <div className={'searchArea'}>
                <input placeholder="input search text" onSearch={value => console.log(value)} enterButton/>
            </div>
        </div>
    );
};

export default Search;
