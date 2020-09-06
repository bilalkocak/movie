import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <Link href={'/'}>
                <a>Search</a>
            </Link>
            <Link href={'/watchlist'}>
                <a>Watch List</a>
            </Link>
        </div>
    );
};

export default Navbar;
