import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <Link href={'/'}>
                <a>Ana Sayfa</a>
            </Link>
            <Link href={'/favoriler'}>
                <a>Favoriler</a>
            </Link>
        </div>
    );
};

export default Navbar;
